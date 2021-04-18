import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyCheckoutForm from "./MyCheckoutForm/MyCheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IgZlaErXH68TRqBbWhYutYL7GSqGUfKxbZ5x4K36lVAx4dk9OHs8ZIjlHxOQU2HGnTAsrMBh2sIuZzwx65abmRF00559ZeC22"
);

const Payment = ({ processOrder }) => {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm processOrder={processOrder}></MyCheckoutForm>
    </Elements>
  );
};

export default Payment;
