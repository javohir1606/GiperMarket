import { request } from '../../../config/request'
import { useQuery } from 'react-query'
export const useGetPhones = () => {
  return (
    useQuery({
      queryKey:['phone'],
      queryFn:()=> request.get('/phones').then((res)=> res.data)
    })
  )
}
