 const handlePayment = () => {
    if (!isSignedIn) {
      toast("You must sign in before checkout");
      return;
    }
    
    if (!shippingDetails.Name || !shippingDetails.Phone || !shippingDetails.Address) {
      toast("Please fill all shipping details");
      return;
    }
    setShowCheckout(false)
    const paystack = new Paystack();
    
    // prepare fresh metadata and amount
    const amountInGHS = Math.round(calculateTotal() * 100); // GHS * 100 (as required)
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

      // called when payment is successful
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
          console.log(res.message)
          setLoading(false);

          if (!res.success) {
            console.error("Server save failed:" );
            toast("Payment succeeded but saving order failed.");
            return;
          }

          clearCart();
          toast.success(`Payment successful! Order reference: ${reference}`);
          setShowCheckout(false);
        } catch (err) {
          setLoading(false);
          console.error("Error saving order:", err);
          toast("Payment succeeded but saving order failed.");
        }
      },

      // called when user cancels the payment window
      onCancel() {
        toast("Payment cancelled");
      },
    });
  };
