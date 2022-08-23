import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const ProductCard = ({
  image,
  headingText,
  paragraphText,
  imageCss,
  headingCss,
  paragraphCss,
  cardCss,
}) => {
  return (
    <>
      <section className={cardCss}>
        <img src={image} alt={headingText} className={imageCss} />
        <Heading
          headingLevel={"h1"}
          headingText={headingText}
          css={headingCss}
        />
        <Paragraph text={paragraphText} css={paragraphCss} />
        <div className={btnContainerCss}></div>
      </section>
    </>
  );
};

export default ProductCard;
