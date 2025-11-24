"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { usePaystackPayment } from "react-paystack";
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
import { ShoppingCart, X } from "lucide-react";
import { useCartStore } from "@/public/Context/StateContext";
import { toast } from "sonner";

export default function Cart() {
  const { user, isSignedIn } = useUser();
  const cartItems = useCartStore((s) => s.cartItems);
  const totalPrice = useCartStore((s) => s.totalPrice);
  const totalQuantities = useCartStore((s) => s.totalQuantities);
  const toggleQty = useCartStore((s) => s.toggleCartItemQuantity);
  const removeItem = useCartStore((s) => s.onRemove);
  const clearCart = useCartStore((s) => s.clearCart);

  const [showCheckout, setShowCheckout] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    Name: "",
    Phone: "",
    Address: "",
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  // Calculate total with delivery if applicable
  const calculateTotal = () => {
    const baseTotal = totalPrice ;
   
    return baseTotal 
  };

  // Paystack configuration
  const config = {
    reference: new Date().getTime().toString(),
    email: user?.primaryEmailAddress?.emailAddress || "",
    amount: Math.round(calculateTotal() * 100), // Amount in pesewas (GHS * 100)
    publicKey: "pk_live_7818dae2e6cdb971945ad64c97354ea97bc01afb",
    currency: "GHS",
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: user?.fullName || shippingDetails.Name,
        },
        {
          display_name: "Cart Items",
          variable_name: "cart_items",
          value: JSON.stringify(cartItems),
        },
        {
          display_name: "Shipping Details",
          variable_name: "shipping_details",
          value: JSON.stringify(shippingDetails),
        },
       
      ],
    },
  };

  const onSuccess = (reference:number) => {
    console.log("Payment successful:", reference);

    clearCart();
    setShowCheckout(false);
    toast(`Payment successful! Order reference: ${reference}`);
    
    // You can redirect to success page
    // router.push('/success');
  };

  const onClose = () => {
    console.log("Payment closed");
  };

  const initializePayment = usePaystackPayment(config);

  const handleCheckout = () => {
    if (!isSignedIn) {
      alert("Please sign in to checkout");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    setShowCheckout(true);
  };

  const handlePayment = () => {
    // Validate form
    if (!shippingDetails.Name || !shippingDetails.Phone || !shippingDetails.Address) {
      toast("Please fill in all shipping details");
      return;
    }

    //@ts-ignore
    initializePayment(onSuccess, onClose);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-sky-600 h-12 hover:bg-sky-800 py-2 px-4" variant="outline">
          <ShoppingCart size={30} className="text-sky-700 w-7 h-7" />
          <p className="text-sky-700 ml-2">Cart ({totalQuantities})</p>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
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
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded object-cover"
                  />

                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.title}</p>
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
                    <span>GHS {(totalPrice).toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
              <Button
                type="button"
                className="bg-sky-600 hover:bg-sky-800"
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle>Checkout</DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCheckout(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
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
                  required
                />
                <Input
                  name="Phone"
                  placeholder="Phone Number"
                  value={shippingDetails.Phone}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="Address"
                  placeholder="Delivery Address"
                  value={shippingDetails.Address}
                  onChange={handleInputChange}
                  required
                />
              </div>

          
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowCheckout(false)}
              >
                Back to Cart
              </Button>
              <Button
                type="button"
                className="bg-sky-600 hover:bg-sky-700"
                onClick={handlePayment}
              >
                Pay with Paystack
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}