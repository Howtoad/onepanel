import Paragraph from "../components/Paragraph";

const Order = ({ price, country, name, address, orderid }) => {
  const styles = {
    labelCss: "text-sm",
    valueCss: "text-sm bg-white max-w-max",
  };
  return (
    <section className="grid bg-opGrayBg grid-rows-2 grid-cols-2">
      {/* <div className="flex"> */}
      <Paragraph text={"Ord.Nr"} css={styles.labelCss} />
      <Paragraph text={orderid} css={styles.valueCss} />
      {/* </div> */}
      {/* <div className="flex"> */}
      <Paragraph text={"price"} css={styles.labelCss} />
      <Paragraph text={price} css={styles.valueCss} />
      {/* </div> */}
      {/* <div className="flex"> */}
      <Paragraph text={"country"} css={styles.labelCss} />
      <Paragraph text={country} css={styles.valueCss} />
      {/* // </div> */}
      {/* <div className="flex"> */}
      <Paragraph text={"name"} css={styles.labelCss} />
      <Paragraph text={name} css={styles.valueCss} />
      {/* // </div> */}
      {/* <div className="flex"> */}
      <Paragraph text={"address"} css={styles.labelCss} />
      <Paragraph text={address} css={styles.valueCss} />
      {/* // </div> */}
    </section>
  );
};

export default Order;
