import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/* ------------------------------ Create a Api ------------------------------ */
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions"],
  endpoints: (build) => ({
    /** All Users Route */
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    /** All Products Route */
    getProucts: build.query({
      query: () => `client/products`,
      providesTags: ["Products"],
    }),

    /** All Customers Route */
    getCustomers: build.query({
      query: () => `client/customers`,
      providesTags: ["Customers"],
    }),

    /** Transactions Route */
    getTransactions: build.query({
      query: (page, pageSize, sort, search) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProuctsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
} = api;
