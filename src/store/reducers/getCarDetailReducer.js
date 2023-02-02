import { GET_CAR_DETAIL } from "../actionTypes";

const initialState = {
  id: "",
  name: "",
  category: "",
  price: "",
  image: "",
};

const getCarDetailReducer = (state = initialState, action) => {
  if (action.type === GET_CAR_DETAIL) {
    return {
      ...state,
      id: action.payload.id,
      name: action.payload.name,
      category: action.payload.category,
      price: action.payload.price,
      image: action.payload.image,
    };
  }
  return state;
};

export default getCarDetailReducer;
