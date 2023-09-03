import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

// TODO: PROVIDE PUBLISED ABLE KEY
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  console.log(price);
  return (
    <div>
      <SectionTitle
        subHeading="Please process"
        heading="Payment"
      ></SectionTitle>
      <h2 className="text-3xl">Tk o Tk tmi uira uira asho</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price} cart={cart}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
