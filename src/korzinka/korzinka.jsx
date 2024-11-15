import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { useGetPhones } from '../pages/Home/query/useGetPhones';

const KorzinkaCard = () => {
  // const { data: phone } = useGetPhones();
  return (
    <Stack>
        {/* {phone?.map((item) => (
              <Stack key={item.id} direction={"row"}>
                <img src={item.img} alt="" />
              </Stack>
            ))} */}
    </Stack>
  );
};

export default KorzinkaCard;
