import { RiEditBoxLine } from "react-icons/ri";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const ProductCard = ({
  image,
  headingText,
  paragraphText,
  productID,
  imageCss,
  headingCss,
  paragraphCss,
  cardCss,
  editCard,
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
        <div className="flex justify-between">
          {editCard && (
            <Link to={"/product/" + productID}>
              <Button
                buttonIcon={<RiEditBoxLine size={30} className="m-auto" />}
                buttonText="Edit"
                css="bg-opGray w-20"
                textCss="text-bg font-semibold"
              />
            </Link>
          )}
          {editCard && (
            <Button
              buttonIcon={<TbTrash size={30} className="m-auto" />}
              buttonText="Delete"
              css="bg-opRed w-20"
              textCss="text-bg font-semibold"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default ProductCard;
