import { useQuery } from "react-query";
import { request } from "../../../config/request";

export const useGetSingleNotebook = (id) => {
  console.log(id);
  
  return useQuery({
    queryKey: ["singleData", id], 
    queryFn: () => {
      return request.get(`/notebook/${id}`).then((res) => res);
    }
  });
};
