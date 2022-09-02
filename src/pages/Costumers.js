import useFetch from "../customHooks/useFetch";
import Customer from "../modules/Customer";

const Costumers = () => {
  const { data } = useFetch("http://localhost:3001/customers");
  return (
    <section>
      {data &&
        data.map((customer) => {
          return (
            <Customer
              customerID={customer.id}
              keyId={customer.id}
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
