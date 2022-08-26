import { useEffect, useState, useContext } from "react";
import TokenContext from "../context/TokenContext";

export default function useFetch(API) {
  const [data, setData] = useState({});
  const { token } = useContext(TokenContext);

  useEffect(
    function () {
      (async function () {
        fetch("http://localhost:3001/products", {
          headers: {
            authorization: "Bearer " + token,
          },
        })
          .then((res) => res.json())
          .then((data) => setData(data));
      })();
    },
    [API]
  );

  return { data };
}
