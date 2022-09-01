import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useCallback, useState } from "react";
import Paragraph from "../components/Paragraph";
import useFetch from "../customHooks/useFetch";
import { MdKeyboardArrowDown } from "react-icons/md";

const ModalWindowC = ({
  showModalWindow,
  setShowModalWindow,
  modalContainerAnimation,
  modalContentAnimation,
  alertdialog,
  keyId,
}) => {
  const { data } = useFetch("http://localhost:3001/" + keyId, {
    headers: { authorization: "Bearer " + "1234" },
  });

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
    valueCss: "text-sm bg-white max-w-max leading-4 capitalize px-1",
    customerCss: "mb-1.5 flex",
  };

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
        <p className="text-black text-center text-2xl p-2 text-bold">
          {data && (
            <section>
              <div className={styles.customerCss}>
                <Paragraph text={"Ord.Nr"} css={styles.labelCss} />
                <Paragraph text={data.order_number} css={styles.valueCss} />
              </div>
              <div className={styles.customerCss}>
                <Paragraph text={"Name"} css={styles.labelCss} />
                <Paragraph text={data.name} css={styles.valueCss} />
              </div>
              <div className={styles.customerCss}>
                <Paragraph text={"Address"} css={styles.labelCss} />
                <Paragraph text={data.address} css={styles.valueCss} />
              </div>
              <div className={styles.customerCss}>
                <Paragraph text={"Country"} css={styles.labelCss} />
                <Paragraph text={data.country} css={styles.valueCss} />
              </div>
              <div className={styles.customerCss}>
                <Paragraph text={"Price"} css={styles.labelCss} />
                <Paragraph text={data.totalsum} css={styles.valueCss} />
              </div>
            </section>
          )}
        </p>
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
