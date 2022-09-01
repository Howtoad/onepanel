import Paragraph from "../components/Paragraph";
import { MdKeyboardArrowDown } from "react-icons/md";
import ModalWindow from "../templates/ModalWindow";
import { useState } from "react";

const Order = ({ price, country, name, address, orderid, keyId }) => {
  const [showModalWindow, setShowModalWindow] = useState(false);
  const modalContainerAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 0.5,
    },
  };
  const modalContentAnimation = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    show: {
      display: "flex",
      opacity: 1,
    },
  };
  const styles = {
    labelCss: "text-sm leading-4 capitalize px-1",
    valueCss: "text-sm bg-white max-w-max leading-4 capitalize px-1",
  };
  return (
    <section className="grid bg-opGrayBg ">
      <div className="flex mb-1 mt-1">
        <Paragraph text={"Ord.Nr"} css={styles.labelCss} />
        <Paragraph text={orderid} css={styles.valueCss} />

        <Paragraph text={"price"} css={styles.labelCss} />
        <Paragraph text={price} css={styles.valueCss} />

        <Paragraph text={"country"} css={styles.labelCss} />
        <Paragraph text={country} css={styles.valueCss} />
      </div>
      <div className="flex ">
        <Paragraph text={"name"} css={styles.labelCss} />
        <Paragraph text={name} css={styles.valueCss} />

        <Paragraph text={"address"} css={styles.labelCss} />
        <Paragraph text={address} css={styles.valueCss} />
      </div>
      <div className="justify-self-center">
        <MdKeyboardArrowDown
          size={32}
          onClick={() => setShowModalWindow(true)}
        />
      </div>
      <ModalWindow
        showModalWindow={showModalWindow}
        setShowModalWindow={setShowModalWindow}
        modalContainerAnimation={modalContainerAnimation}
        modalContentAnimation={modalContentAnimation}
        keyId={"orders/" + keyId}
      />
    </section>
  );
};

export default Order;
