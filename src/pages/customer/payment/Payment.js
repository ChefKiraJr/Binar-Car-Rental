import React, { useEffect } from "react";
import CommonLayout from "../../../components/commonLayout/CommonLayout";
import PaymentDetail from "./components/paymentDetail/PaymentDetail";
import PaymentForm from "./components/paymentForm/PaymentForm";
import PaymentHeader from "./components/paymentHeader/PaymentHeader";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCarDetail } from "../../../store/actions/getCarDetailAction";

const Payment = () => {
  const { anak } = useParams();
  const { carDetail } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarDetail(anak));
  }, [anak]);
  return (
    <CommonLayout page="payment">
      <PaymentHeader anak={anak} />
      <PaymentForm data={carDetail} />
      <PaymentDetail data={carDetail} />
    </CommonLayout>
  );
};

export default Payment;
