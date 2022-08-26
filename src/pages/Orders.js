import Order from "../modules/Order";
import useFetch from "../customHooks/useFetch";

const Orders = () => {
  const { data } = useFetch("http://localhost:3001/orders", {
    headers: { authorization: "Bearer " + "1234" },
  });

  return (
    <section>
      {data[0] &&
        data.map((order) => {
          console.log(order);
          return (
            <Order
              orderid={order.id}
              price={order.totalsum}
              country={order.country}
              name={order.name}
              address={order.address}
            />
          );
        })}
    </section>
  );
};

export default Orders;
