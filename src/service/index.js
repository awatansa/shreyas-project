import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://countriesnow.space/api/v0.1/",
  }),
  endpoints: (build) => ({
    getCountries: build.query({
      query: () => ({
        url: "/countries",
      }),
    }),
    fetchStates: build.mutation({
      query: (country) => {
        return {
          url: "countries/states",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accepts: "*/*",
            Connection: "keep-alive",
          },
          body: JSON.parse(JSON.stringify({ country: country })),
          // mode: "no-cors",
        };
      },
    }),
  }),
});

const { useFetchStatesMutation, useGetCountriesQuery } = api;

export { useFetchStatesMutation, useGetCountriesQuery };
