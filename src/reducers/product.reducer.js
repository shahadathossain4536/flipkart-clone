import { productsConstants } from "../actions/constants";

const initiState = {
  products: [],
  productsByPrice: {
    under5k: [],
    under10k: [],
    under15k: [],
    under20k: [],
    under25k: [],
    under30k: [],
  },
};

export default (state = initiState, action) => {
  switch (action.type) {
    case productsConstants.GET_PRODUCTS_BY_SLUG:
      state = {
        ...state,
        products: action.payload.products,
        productsByPrice: {
          ...action.payload.productsByPrice,
        },
      };
      break;
  }
  return state;
};
