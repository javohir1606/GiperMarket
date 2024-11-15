import React from "react";
import { useParams } from "react-router";
import { useGetSinglePhone } from "../../pages/Home/query/useGetSinglePhone";

export const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useGetSinglePhone(parseInt(id));

  return (
    <>
      {data && (
        <>
          <img src={data.img} alt={data.title} />
          <h1>{data.title}</h1>
        </>
      )}
    </>
  );
};

