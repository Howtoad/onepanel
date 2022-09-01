import Paragraph from "../components/Paragraph";
import ModalWindowC from "../templates/ModalWindowC";
import { useState } from "react";

const Customer = ({ customerID, name, phonenr, address, keyId }) => {
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
    valueCss: "truncate text-sm pl-1",
  };
  return (
    <>
      <section
        className="flex divide-x-2 divide-black bg-opGrayBg mb-2 justify-between"
        onClick={() => setShowModalWindow(true)}
      >
        <Paragraph text={"ID: " + customerID} css={styles.valueCss} />
        <Paragraph text={name} css={styles.valueCss} />
        <Paragraph text={address} css={styles.valueCss} />
        <Paragraph text={phonenr} css={styles.valueCss} />
      </section>

      <ModalWindowC
        showModalWindow={showModalWindow}
        setShowModalWindow={setShowModalWindow}
        modalContainerAnimation={modalContainerAnimation}
        modalContentAnimation={modalContentAnimation}
        keyId={"customers/" + keyId}
      />
    </>
  );
};

export default Customer;
