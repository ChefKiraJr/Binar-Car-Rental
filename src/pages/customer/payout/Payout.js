import React from "react";
import CommonLayout from "../../../components/commonLayout/CommonLayout";
import PayoutHeader from "./components/payoutHeader/PayoutHeader";
import { useParams } from "react-router";
import PayoutDetail from "./components/payoutDetail/PayoutDetail";

const Payout = () => {
  const { anak } = useParams();
  const paymentMethod = localStorage.getItem("paymentMethod");
  const totalPayment = localStorage.getItem("totalPayment");
  return (
    <CommonLayout>
      <PayoutHeader anak={anak} paymentMethod={paymentMethod} />
      <PayoutDetail
        anak={anak}
        paymentMethod={paymentMethod}
        totalPayment={totalPayment}
      />
    </CommonLayout>
  );
};

export default Payout;
