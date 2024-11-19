import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { useGetPhones } from '../pages/Home/query/useGetPhones';

const KorzinkaCard = () => {
  const { data: phones } = useGetPhones();

  const purchasedItems = phones?.filter((phone) => phone.inCart);

  return (
    <Stack spacing={2} padding={2}>
      <Typography
        variant="h4"
        fontWeight={600}
        textAlign="center"
        color="#333"
        marginBottom={2}
      >
        Sotib olingan narsalar
      </Typography>

      {purchasedItems?.length > 0 ? (
        purchasedItems.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            spacing={2}
            padding={2}
            border="1px solid #ddd"
            borderRadius="8px"
          >
            <Box width="100px" height="100px">
              <img
                src={item.img}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>

            <Stack flex={1}>
              <Typography variant="h6" fontWeight={500} color="#333">
                {item.title}
              </Typography>
              <Typography color="#666">Narx: {item.price} сум</Typography>
              <Typography color="#666">Soni: {item.quantity}</Typography>
            </Stack>

            <Button
              variant="contained"
              color="error"
              onClick={() => console.log(`Delete ${item.id}`)}
            >
              O'chirish
            </Button>
          </Stack>
        ))
      ) : (
        <Typography textAlign="center" color="#666">
          Sotib olingan narsalar mavjud emas.
        </Typography>
      )}
    </Stack>
  );
};

export default KorzinkaCard;
