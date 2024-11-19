import { useQuery } from "react-query";
import { request } from "../../../config/request";

export const useSingleCatalog = (name = "") => {
  console.log(name);
  
  return useQuery({
    queryKey: ["single-catalog", name],
    queryFn: () =>
      request.get(`/${name}`).then((res) => res.data), 
  });
};
