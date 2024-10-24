import { useEffect, useState } from "react";
import { useGetOrdersQuery } from "../store/api/enpoints/OrdersAPI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setOrders } from "../store/orders/orderSlice";

const useOrders = () => {
  const orders = useSelector((state: RootState) => state.order.orders); 
  const dispatch = useDispatch();

  const { data: ordersFetched, isLoading } = useGetOrdersQuery();

  useEffect(() => {
    if (ordersFetched) {
      dispatch(setOrders(ordersFetched));
      console.log('Orders fetched:', ordersFetched);
    }
  }, [ordersFetched, dispatch]);

  return {
    orders,
    isLoading,
  };
};



export default useOrders