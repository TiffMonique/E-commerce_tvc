import { Order } from "@/app/interfaces/orders";
import { api } from "../api";
import { EndpointResult } from "../interfaces";
import { Orders } from "../Tags/Orders";


const transformGetOrdersResponse = (responseData: any): Order[] => {
    return responseData.map(({ orderID, createdAt, client, total, status }: any): Order => ({
        orderID: orderID,
        createdAt: new Date(createdAt),
        client: client,
        total: total,
        status: status,
    }));
};

export const OrdersAPI = api.injectEndpoints({
    endpoints: build => ({
        getOrders: build.query<Order[], void>({
            query: () => ({
                url: "/api/orders",
                method: "GET",
            }),
            providesTags: [Orders],
            transformResponse: transformGetOrdersResponse
        }),
        addOrder: build.mutation<EndpointResult<Order>, Order>({
            query: ({ client, total }) => ({
                url: "/api/order",
                method: "POST",
                body: {
                    client: client,
                    total: total,
                }
            }),
            transformResponse: (responseData: any, _meta, args) => {
                const message: string = responseData.message;
                const order: Order = {
                    orderID: responseData.result[0],
                    createdAt: args.createdAt, 
                    client: args.client,
                    total: args.total,
                    status: args.status, 
                };
                return {
                    message,
                    result: order,
                };
            },
            invalidatesTags: [Orders]
        }),
        updateOrder: build.mutation<EndpointResult<Order>, Order>({
            query: ({orderID, client, total }) => ({
                url: "/api/orders",
                method: "PUT",
                body: {
                    orderID: orderID,
                    client: client,
                    total: total,
                }
            }),
            transformResponse: (responseData: any, _meta, args) => {
                const message: string = responseData.message;
                const order: Order = {
                    orderID: args.orderID,
                    createdAt: args.createdAt,
                    client: args.client,
                    total: args.total,
                    status: args.status, 
                };
                return {
                    message,
                    result: order,
                };
            },
            invalidatesTags: [Orders]
        }),
    })
});

export const {
    useGetOrdersQuery,
    useAddOrderMutation,
    useUpdateOrderMutation,
} = OrdersAPI;
