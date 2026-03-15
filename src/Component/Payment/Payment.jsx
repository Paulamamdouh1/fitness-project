import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Payment() {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "20.00",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            alert("Payment successful!");
          });
        }}
      />
    </PayPalScriptProvider>
  );
}