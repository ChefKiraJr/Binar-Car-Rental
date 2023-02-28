import React from "react";
import CommonLayout from "../../../components/commonLayout/CommonLayout";
import ETicketHeader from "./components/eTicketHeader/ETicketHeader";
import { useParams } from "react-router";
import ETicketSuccess from "./components/eTicketSuccess/ETicketSuccess";

const ETicket = () => {
  const { anak } = useParams();
  return (
    <CommonLayout>
      <ETicketHeader anak={anak} />
      <ETicketSuccess />
    </CommonLayout>
  );
};

export default ETicket;
