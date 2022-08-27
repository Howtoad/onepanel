import Paragraph from "../components/Paragraph";

const Customer = ({ customerID, name, phonenr, address }) => {
  const styles = {
    valueCss: "truncate text-sm",
  };
  return (
    <section className="flex divide-x-2 divide-black bg-opGrayBg mb-2">
      <Paragraph text={"ID: " + customerID} css={styles.valueCss} />
      <Paragraph text={name} css={styles.valueCss} />
      <Paragraph text={address} css={styles.valueCss} />
      <Paragraph text={phonenr} css={styles.valueCss} />
    </section>
  );
};

export default Customer;
