import useFetch from "../customHooks/useFetch";
import Order from "../modules/Order";

const Orders = () => {
  const { data } = useFetch("http://localhost:3001/orders", {
    headers: { authorization: "Bearer " + "1234" },
  });

  return (
    <section className="grid gap-y-2">
      {data[0] &&
        data.map((order) => {
          console.log(order);
          return (
            <Order
              orderid={order.order_number}
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
