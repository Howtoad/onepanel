import useFetch from "../customHooks/useFetch";
import Order from "../modules/Order";

const Orders = () => {
  const { data } = useFetch("http://localhost:3001/orders");

  return (
    <section className="grid gap-y-2">
      {data &&
        data.map((order) => {
          return (
            <Order
              keyId={order.id}
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
