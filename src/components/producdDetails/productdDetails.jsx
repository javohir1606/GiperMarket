import { useGetSinglePhone } from "../../pages/Home/query/useGetSinglePhone";

export const ProductdDetails = ({ id }) => {
  const { data, isLoading, isError } = useGetSinglePhone(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading phone data</p>;

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};
