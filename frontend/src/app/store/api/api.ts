import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domain } from "../../config/domain";
import * as tags from "./Tags";

const {
  OrdersTags,
  ProductsTags,
} = tags;

export const api = createApi({
    tagTypes: [
        ...OrdersTags,
        ...ProductsTags,
    ],
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${domain}/`,
        credentials: "include",
        validateStatus: response => {
            if (response.status === 401) {
                window.location.reload();
                return false;
            }
            return response.status < 400;
        }
    }),
    endpoints: () => ({})
});