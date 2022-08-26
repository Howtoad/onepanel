import Paragraph from "../components/Paragraph";

const Order = ({ price, country, name, address, orderid }) => {
  const styles = {
    labelCss: "text-sm",
  };
  return (
    <section>
      <div>
        <Paragraph text={"Ord.Nr"} css={styles.labelCss} />
        <Paragraph text={orderid} />
      </div>
      <div>
        <Paragraph text={"price"} css={styles.labelCss} />
        <Paragraph text={price} />
      </div>
      <div>
        <Paragraph text={"country"} css={styles.labelCss} />
        <Paragraph text={country} />
      </div>
      <div>
        <Paragraph text={"name"} css={styles.labelCss} />
        <Paragraph text={name} />
      </div>
      <div>
        <Paragraph text={"address"} css={styles.labelCss} />
        <Paragraph text={address} />
      </div>
    </section>
  );
};

export default Order;
