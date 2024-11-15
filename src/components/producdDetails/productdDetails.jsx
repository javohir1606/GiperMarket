import React from "react";
import { useParams } from "react-router";
import { useGetSinglePhone } from "../../pages/Home/query/useGetSinglePhone";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSinglePhone(parseInt(id));

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
      {data ? (
        <h1>{data.title}</h1>
      ) : (
        <h1>Product not found</h1>
      )}
    </>
  );
};

export default ProductDetails;
