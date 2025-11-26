"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Paystack from "@paystack/inline-js";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/public/Context/StateContext";
import { toast } from "sonner";
import { createOrder } from "@/lib/Api/managementapi";

export default function Cart() {
  const { user, isSignedIn } = useUser();

  const cartItems = useCartStore((s) => s.cartItems);
  const totalPrice = useCartStore((s) => s.totalPrice);
  const totalQuantities = useCartStore((s) => s.totalQuantities);
  const toggleQty = useCartStore((s) => s.toggleCartItemQuantity);
  const removeItem = useCartStore((s) => s.onRemove);
  const clearCart = useCartStore((s) => s.clearCart);

  const [showCheckout, setShowCheckout] = useState(false);
  const [open, setOpen] = useState(false);        // ✅ Added controlled dialog
  const [loading, setLoading] = useState(false);

  const [shippingDetails, setShippingDetails] = useState({
    Name: "",
    Phone: "",
    Address: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotal = () => totalPrice;

  const handlePayment = () => {
    if (!isSignedIn) {
      toast("You must sign in before checkout");
      return;
    }

    if (!shippingDetails.Name || !shippingDetails.Phone || !shippingDetails.Address) {
      toast("Please fill all shipping details");
      return;
    }

    // ✅ Close checkout section AND dialog completely
    setShowCheckout(false);
    setOpen(false);

    setTimeout(() => {
      const paystack = new Paystack();

      const amountInGHS = Math.round(calculateTotal() * 100);
      const customerEmail = user?.primaryEmailAddress?.emailAddress || "";

      const metadata = {
        custom_fields: [
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: user?.fullName || shippingDetails.Name,
          },
          {
            display_name: "Cart Items",
            variable_name: "cart_items",
            value: JSON.stringify(
              cartItems.map((item) => ({
                id: item.id,
                name: item.name,
                qty: item.quantity,
                price: item.price,
              }))
            ),
          },
          {
            display_name: "Shipping Details",
            variable_name: "shipping_details",
            value: JSON.stringify(shippingDetails),
          },
        ],
      };

      paystack.newTransaction({
        key: "pk_test_1156b935d863b0c6d92a19b3678d034562cf062a",
        email: customerEmail,
        amount: amountInGHS,
        metadata,

        async onSuccess(transaction: any) {
          const reference = transaction?.reference ?? String(Date.now());
          console.log("Paystack success:", reference);

          const orderPayload = {
            user: customerEmail,
            cartItem: cartItems.map((item) => ({
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
            })),
            Address: shippingDetails.Address,
            status: "processing",
            reference,
            shippingDetails,
          };

          try {
            setLoading(true);
            const res = await createOrder(orderPayload);
            setLoading(false);

            if (!res.success) {
              toast("Payment succeeded but saving order failed.");
              return;
            }

            clearCart();
            toast.success(`Payment successful! Order reference: ${reference}`);
          } catch (err) {
            setLoading(false);
            toast("Payment succeeded but saving order failed.");
          }
        },

        onCancel() {
          toast("Payment cancelled");
        },
      });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-green-400 h-12 hover:bg-green-400 py-2 px-4"
          variant="outline"
          onClick={() => setOpen(true)}   // ✅ Opens dialog properly
        >
          <ShoppingCart size={30} className="text-green-400 w-7 h-7" />
          <p className="text-green-400 ml-2">Cart ({totalQuantities})</p>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto ">
        {!showCheckout ? (
          <>
            <DialogHeader>
              <DialogTitle>Shopping Cart</DialogTitle>
              <DialogDescription>
                {cartItems.length === 0
                  ? "Your cart is empty."
                  : `You have ${cartItems.length} item(s) in your cart.`}
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 border-b pb-3"
                >
                  <img
                    /* @ts-ignore */
                    src={`https:${item?.image?.[0]?.fields?.file?.url}`}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />

                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      GHS {item.price.toFixed(2)} each
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        size="sm"
                        className="bg-sky-700 hover:bg-sky-600 h-7 w-7 p-0"
                        onClick={() => toggleQty(item.id, "dec")}
                      >
                        -
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        size="sm"
                        className="bg-sky-700 hover:bg-sky-600 h-7 w-7 p-0"
                        onClick={() => toggleQty(item.id, "inc")}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <p className="font-semibold text-sm">
                      GHS {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeItem(item)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}

              {cartItems.length > 0 && (
                <div className="space-y-2 mt-4 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>GHS {totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total:</span>
                    <span>GHS {calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" disabled={loading}>
                  Close
                </Button>
              </DialogClose>
              <Button
                type="button"
                className="bg-sky-600 hover:bg-sky-800"
                disabled={cartItems.length === 0 || loading}
                onClick={() => setShowCheckout(true)}
              >
                Proceed to Checkout
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle>Checkout</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Order Summary</h3>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>GHS {totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span>GHS {calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Delivery Details</h3>
                <Input
                  name="Name"
                  placeholder="Full Name"
                  value={shippingDetails.Name}
                  onChange={handleInputChange}
                />
                <Input
                  name="Phone"
                  placeholder="Phone Number"
                  value={shippingDetails.Phone}
                  onChange={handleInputChange}
                />
                <Input
                  name="Address"
                  placeholder="Delivery Address"
                  value={shippingDetails.Address}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowCheckout(false)}
                disabled={loading}
              >
                Back to Cart
              </Button>
              <Button
                type="button"
                className="bg-sky-600 hover:bg-sky-700"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? "Processing…" : "Pay with Paystack"}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
