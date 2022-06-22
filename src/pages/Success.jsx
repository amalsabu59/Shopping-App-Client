import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../axios";
import {useHistory} from 'react-router-dom'

const Success = () => {
  const location = useLocation();
  

  const currentUser = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const [orderId, setOrderId] = useState(null);
  const history = useHistory()
 
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
           address: "AMAL SABU"
        });
        setOrderId(res.data._id);
      } catch {}
    };
    createOrder();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button onClick={()=>history.push("/")} style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      <button style={{ padding: 10, marginTop: 20 }}>Go to Orders</button>
    </div>
  );
};

export default Success;