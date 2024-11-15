import { useQuery } from "react-query";
import { request } from "../../../config/request";

export const useGetSinglePhone = () => {
  return useQuery({
    queryKey: ["singleData"],
    queryFn: (id) => request.get(`/phones/${id}`).then((res) => res.data),
  });
};
