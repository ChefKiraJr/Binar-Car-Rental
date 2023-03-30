import React from "react";
import CommonLayout from "../../../components/commonLayout/CommonLayout";
import PayoutHeader from "./components/payoutHeader/PayoutHeader";
import { useParams } from "react-router";
import PayoutDetail from "./components/payoutDetail/PayoutDetail";

const Payout = () => {
  const { anak } = useParams();
  return (
    <CommonLayout>
      <PayoutHeader anak={anak} />
      <PayoutDetail anak={anak} />
    </CommonLayout>
  );
};

export default Payout;
