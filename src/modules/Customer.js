import Paragraph from "../components/Paragraph";

const Customer = ({ customerID, name, phonenr, address }) => {
  const styles = {
    valueCss: "truncate text-sm pl-1",
  };
  return (
    <section className="flex divide-x-2 divide-black bg-opGrayBg mb-2 justify-between">
      <Paragraph text={"ID: " + customerID} css={styles.valueCss} />
      <Paragraph text={name} css={styles.valueCss} />
      <Paragraph text={address} css={styles.valueCss} />
      <Paragraph text={phonenr} css={styles.valueCss} />
    </section>
  );
};

export default Customer;
