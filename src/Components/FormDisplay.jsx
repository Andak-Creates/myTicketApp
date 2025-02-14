import React from "react";
import CollectDetails from "./CollectDetails";
import SelectTicket from "./SelectTicket";
import { useAppContext } from "./ContextProvider";
import DisplayTicket from "./DisplayTicket";
import TicketFlow from "./TicketFlow";

const FormDisplay = () => {
  const { storedTicket } = useAppContext();
  return (
    <div className="formDisplay">
      <div className="formHolder">
        <TicketFlow />
        {localStorage.getItem("userDetails") ? (
          <DisplayTicket />
        ) : storedTicket || localStorage.getItem("selectedTicket") ? (
          <CollectDetails />
        ) : (
          <SelectTicket />
        )}
      </div>
    </div>
  );
};

export default FormDisplay;
