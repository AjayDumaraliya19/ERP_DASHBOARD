/** import necessary functions from different modules */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/* ------------------------------ Create a Api ------------------------------ */
// export a const named api that stores the value of the createApi function
export const api = createApi({
  // specify the base URL for all API requests
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  // specify the name of the root reducer in the Redux store
  reducerPath: "adminApi",
  // define the possible types of tags for different parts of the state
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  // specify the different endpoints for the API
  endpoints: (build) => ({
    /** All Users Route */
    // create a query named getUser using the build.query function
    getUser: build.query({
      // specify the path for the getUser query
      query: (id) => `general/user/${id}`,
      // specify the type of tag provided by the getUser query
      providesTags: ["User"],
    }),

    /** All Products Route */
    // create a query named getProucts using the build.query function
    getProucts: build.query({
      // specify the path for the getProucts query
      query: () => `client/products`,
      // specify the type of tag provided by the getProucts query
      providesTags: ["Products"],
    }),

    /** All Customers Route */
    // create a query named getCustomers using the build.query function
    getCustomers: build.query({
      // specify the path for the getCustomers query
      query: () => `client/customers`,
      // specify the type of tag provided by the getCustomers query
      providesTags: ["Customers"],
    }),

    /** Transactions Route */
    // create a query named getTransactions using the build.query function
    getTransactions: build.query({
      // specify the path for the getTransactions query
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      // specify the type of tag provided by the getTransactions query
      providesTags: ["Transactions"],
    }),

    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),

    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),

    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),

    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),

    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

/** export hooks for using the different queries in components */
export const {
  useGetUserQuery,
  useGetProuctsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
