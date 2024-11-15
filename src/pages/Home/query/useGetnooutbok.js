import { useQuery } from 'react-query'
import { request } from '../../../config/request'

export const useGetNotebook = () => {
  return (
    useQuery({
      queryKey:['notebook'],
      queryFn:()=> request.get('/notebook').then((res)=> res.data)
    })
  )
}
