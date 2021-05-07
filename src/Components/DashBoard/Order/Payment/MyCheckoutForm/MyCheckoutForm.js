import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const MyCheckoutForm = ({ processOrder }) => {
  const [paymentError, setPaymentError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess("");
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError("");
      processOrder(paymentMethod.id);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="text-secondary">Pay with Card</h4>
        <CardElement className="form-control mb-3" />
        <button className="btn btn-danger pl-5 pr-5" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <h4 className="text-danger"> {paymentError} </h4>}
      {paymentSuccess && (
        <h4 className="text-success"> Your Payment successfully done </h4>
      )}
    </div>
  );
};

export default MyCheckoutForm;
