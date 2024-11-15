// import { useQuery } from "react-query";
// import { request } from "../../../config/request";

// export const useGetSinglePhone = () => {
//   return useQuery({
//     queryKey: ["singleData"],
//     queryFn: (id) => request.get(`/phones/${id}`).then((res) => res.data),
//     console.log(`/phones/${id}`);
    
//   });
// };



import { useQuery } from "react-query";
import { request } from "../../../config/request";

export const useGetSinglePhone = (id) => {
  return useQuery({
    queryKey: ["singleData", id], 
    queryFn: () => {
      console.log(`${id}`); 
      return request.get(`/phones/${id}`).then((res) => res.data);
    }
  });
};
