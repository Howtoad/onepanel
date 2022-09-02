import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useCallback, useState } from "react";
import Paragraph from "../components/Paragraph";
import useFetch from "../customHooks/useFetch";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const ModalWindowC = ({
  showModalWindow,
  setShowModalWindow,
  modalContainerAnimation,
  modalContentAnimation,
  alertdialog,
  keyId,
}) => {
  const { data } = useFetch("http://localhost:3001/" + keyId);

  //default animation
  const ContainerAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 0.5,
    },
  };
  const ContentAnimation = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    show: {
      display: "flex",
      opacity: 1,
    },
  };

  const containerControls = useAnimationControls();
  const contentControls = useAnimationControls();
  const [ariaHidden, setAriaHidden] = useState(false);

  const showSequence = async () => {
    await containerControls.start("show");
    return await contentControls.start("show");
  };
  const hideSequence = async () => {
    contentControls.start("hidden");
    containerControls.start("hidden");
  };

  useEffect(() => {
    if (showModalWindow === true) {
      setAriaHidden(false);
    } else {
      setAriaHidden(true);
    }
  }, [showModalWindow]);

  if (showModalWindow === true) {
    showSequence();
  } else {
    hideSequence();
  }

  const escapeDown = useCallback((event) => {
    if (event.keyCode === 27) {
      setShowModalWindow(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escapeDown, false);
    return () => {
      document.removeEventListener("keydown", escapeDown, false);
    };
  }, []);

  const styles = {
    labelCss: "text-sm leading-4 capitalize px-1 h-5",
    valueCss:
      "text-sm max-w-max leading-4 capitalize px-1 text-center text-bold",
    customerCss: "mb-1.5 flex ml-2 mt-1",
  };
  // text-black text-center text-2xl p-2 text-bold
  return (
    <>
      <motion.section
        aria-modal="true"
        role="dialog"
        aria-hidden={ariaHidden}
        className="lightbox w-screen h-screen bg-black absolute top-0"
        variants={
          (modalContainerAnimation && modalContainerAnimation) ||
          ContainerAnimation
        }
        initial="hidden"
        animate={containerControls}
        onClick={(e) => {
          console.log(e.target);
          e.target === e.currentTarget && setShowModalWindow(false);
        }}
      ></motion.section>
      <motion.div
        aria-modal="true"
        role="alertdialog"
        aria-hidden={ariaHidden}
        className="m-auto min-w-[306px] h-80 z-10 bg-opGrayBg absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 justify-between flex-col rounded-md"
        variants={
          (modalContentAnimation && modalContentAnimation) || ContentAnimation
        }
        initial="hidden"
        animate={contentControls}
      >
        {data && (
          <section>
            <div className={styles.customerCss}>
              <BsPerson size={32} />
            </div>
            <div className={styles.customerCss}>
              <Paragraph text={"ID:"} css={styles.labelCss} />
              <Paragraph text={data.id} css={styles.valueCss} />
            </div>
            <div className={styles.customerCss}>
              <Paragraph text={"Name:"} css={styles.labelCss} />
              <Paragraph text={data.name} css={styles.valueCss} />
            </div>
            <div className={styles.customerCss}>
              <Paragraph text={"Address:"} css={styles.labelCss} />
              <Paragraph
                text={
                  data.billingaddress.address + ", " + data.billingaddress.city
                }
                css={styles.valueCss}
              />
            </div>
            <div className={styles.customerCss}>
              <BsTelephone />
              <Paragraph text={data.phone} css={styles.valueCss} />
            </div>
            <div className={styles.customerCss}>
              <MdOutlineEmail />
              <Paragraph text={data.email} css={styles.valueCss} />
            </div>
          </section>
        )}

        <div className="flex p-2 justify-center w-full">
          <MdKeyboardArrowDown
            size={32}
            onClick={() => setShowModalWindow(false)}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ModalWindowC;
