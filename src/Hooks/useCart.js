import { useEffect } from "react";
import { addOrUpdateCart, addProduct } from "../redux/cartRedux";

const useCart = (cartProducts, dispatch, userId, apiCallRequired) => {
  const arr = [
    {
      userId: userId,
      products: [],
    },
  ];

  const objForApi = (cart) => {
    for (let i = 0; i < cart.length; i++) {
      let obj = {
        products: {
          ProductId: "",
          quantity: "",
        },
      };
      obj.products.ProductId = cartProducts[i]._id;
      obj.products.quantity = cartProducts[i].quantity;
      arr[0].products.push(obj.products);
    }
  };

  useEffect(() => {
    if (apiCallRequired) {
      objForApi(cartProducts);
      dispatch(addOrUpdateCart(arr[0]));
    }
  }, [cartProducts]);

  return arr;
};

export default useCart;
