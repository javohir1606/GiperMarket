// import { QueryClient } from "";

import { QueryClient } from "react-query";

export const client = new QueryClient({
  defaultOptions: {queries: {refetchOnWindowFocus: false}},
})