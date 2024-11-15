import { request } from '../../../config/request'
import { useQuery } from 'react-query'
export const useGetAds = () => {
  return (
    useQuery({
      queryKey:['ads'],
      queryFn:()=> request.get('/ads').then((res)=> res.data)
    })
  )
}
