import { useQuery } from "react-query";
import { request } from "../../../config/request";

export const useGetSinglePhone = (id) => {
  return useQuery({
    queryKey: ["singleData", id], 
    queryFn: () => {
      return request.get(`/phones/${id}`).then((res) => res.data);
    }
  });
};
