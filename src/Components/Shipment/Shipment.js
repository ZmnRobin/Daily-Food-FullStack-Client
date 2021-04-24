import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {CardElement} from '@stripe/react-stripe-js';
import SimplePaymentForm from "./SimplePaymentForm";

const stripePromise = loadStripe(
  "pk_test_51Ie1LfKShqG18GEFkr2yl50mpIIFtG4rrhE4T6KYb5jGOTdmx9fCRBIKdzjMorcEWj9t9sWHi4q2eZtFTkT6NQdW00oi0Ri2C7"
);

const Shipment = () => {
  return (
    <div className="container mt-3">
      <h3>Please complete the payment for shipment</h3>
      <br />
      <Elements stripe={stripePromise}>
          <SimplePaymentForm/>
      </Elements>
    </div>
  );
};

export default Shipment;
