import { useQuery } from 'react-query'
import { request } from '../../../config/request'

export const useGetBanner = () => {
  return (
    useQuery({
      queryKey:['brand'],
      queryFn:()=> request.get('/brand').then((res)=> res.data)
    })
  )
}
