import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export const BarendCard = ({img, brand}) => {
  return (
    <Stack bgcolor={" #f8f8f8"} >
      <img width={"140px"}  height={"90px"} src={img} alt="img" />
      <Typography>{brand}</Typography>
    </Stack>
  )
}
