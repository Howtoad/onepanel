import Paragraph from "../components/Paragraph";

const Order = ({ price, country, name, address, orderid }) => {
  const styles = {
    labelCss: "text-red-600",
  };
  return (
    <section>
      <Paragraph text={"Ord.Nr"} css={styles.labelCss} />
      <Paragraph text={orderid} />
      <Paragraph text={"price"} css={styles.labelCss} />
      <Paragraph text={price} />
      <Paragraph text={"country"} css={styles.labelCss} />
      <Paragraph text={country} />
      <Paragraph text={"name"} css={styles.labelCss} />
      <Paragraph text={name} />
      <Paragraph text={"address"} css={styles.labelCss} />
      <Paragraph text={address} />
    </section>
  );
};

export default Order;
