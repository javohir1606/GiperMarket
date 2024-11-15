import React from "react";
import { useParams } from "react-router";
import { useGetSinglePhone } from "../../pages/Home/query/useGetSinglePhone";

export const ProductdDetails = () => {
  const { id } = useParams();

  const { data } = useGetSinglePhone(parseInt(id));

  return <>{data && <h1>{data.title}</h1>}</>;
};