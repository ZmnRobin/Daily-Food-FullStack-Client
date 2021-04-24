import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import { useState } from "react";

const SimplePaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [payError,setPayError]=useState(null)
  const [success,setSuccess]=useState(null)

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
      setPayError(error.message)
      setSuccess(null)
    } else {
        setSuccess(paymentMethod.id)
        setPayError(null)
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <Button variant='danger' className='mt-4' type="submit" disabled={!stripe}>
          Pay
        </Button>
      </form>
      <br/>
      {
          payError && <p style={{color:'red'}}>{payError}</p>
      }
      {
          success && <p style={{color:'green'}}>Your payment was successfully done</p>
      }
    </div>
  );
};

export default SimplePaymentForm;
