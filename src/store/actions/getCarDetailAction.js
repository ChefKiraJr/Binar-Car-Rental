import { GET_CAR_DETAIL } from "../actionTypes";
import axios from "axios";

export const getCarDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`
      );
      dispatch({ type: GET_CAR_DETAIL, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
