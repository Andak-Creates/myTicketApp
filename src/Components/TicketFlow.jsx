import React, { useState, useEffect } from "react";
import { useAppContext } from "./ContextProvider";
import Loader from "./Loader";
import CollectDetails from "./CollectDetails";
import SelectTicket from "./SelectTicket";
import DisplayTicket from "./DisplayTicket";

const TicketFlow = () => {
  const { storedTicket } = useAppContext();
  const [step, setStep] = useState(1);
  const [text, setText] = useState("Ticket Selection");

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const selectedTicket = JSON.parse(localStorage.getItem("selectedTicket"));

    if (userDetails) {
      setStep(3);
      setText("Ready");
    } else if (selectedTicket) {
      setStep(2);
      setText("Attendee Details");
    } else {
      setStep(1);
      setText("Ticket Selection");
    }
  }, [storedTicket]);

  return (
    <div className="display">
      <Loader text={text} step={step} />
    </div>
  );
};

export default TicketFlow;
