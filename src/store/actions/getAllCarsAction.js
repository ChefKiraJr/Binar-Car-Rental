import { GET_ALL_CARS } from "../actionTypes";
import axios from "axios";

export const getAllCars = (queries) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car${queries}`
      );
      const { cars } = data;
      dispatch({ type: GET_ALL_CARS, payload: cars });
    } catch (err) {
      console.log(err);
    }
  };
};
