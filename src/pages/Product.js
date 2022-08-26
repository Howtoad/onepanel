import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch("http://localhost:3001/products?id=1", {
    headers: { authorization: "Bearer " + "1234" },
  });
  console.log(data);

  return <></>;
};

export default Product;
