import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { BASE_URL, LOCAL_KEYs } from "src/shared/constants";

const timeout = 60000;

const prepareHeaders = (headers: Headers) => {
  headers.set("Access-Control-Allow-Origin", "*");

  // get token for these
  const token = localStorage.getItem(LOCAL_KEYs.ACCESS_TOKEN);
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
};

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders,
  timeout,
});

const handleRequest: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

const baseApi = createApi({
    baseQuery: handleRequest,
    tagTypes: [],
    refetchOnMountOrArgChange: true,
    endpoints: () => ({})
})

export default baseApi