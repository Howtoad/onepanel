import useFetch from "../customHooks/useFetch";
import Customer from "../modules/Customer";

const Costumers = () => {
  const { data } = useFetch("http://localhost:3001/customers", {
    headers: { authorization: "Bearer " + "1234" },
  });
  return (
    <section>
      {data[0] &&
        data.map((customer) => {
          console.log(customer);
          return (
            <Customer
              customerID={customer.id}
              name={customer.name}
              phonenr={customer.phone}
              address={customer.billingaddress.address}
            />
          );
        })}
    </section>
  );
};

export default Costumers;
