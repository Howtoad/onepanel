import { useState } from "react";
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
  productPrice,
  productDiscount,
  priceCss,
  discountCss,
  exampleCardCss,
  buttonCss,
  buttonText,
  buttonTextCss,
}) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteProduct = async function () {
    fetch("http://localhost:3001/products/" + productID, {
      method: "DELETE",
      headers: {
        authorization: "Bearer " + "1234",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success: ", data);
        setIsDeleted(true);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <>
      {!isDeleted && (
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
              <div
                onClick={() => {
                  deleteProduct();
                }}
              >
                <Button
                  buttonIcon={<TbTrash size={30} className="m-auto" />}
                  buttonText="Delete"
                  css="bg-opRed w-20"
                  textCss="text-bg font-semibold"
                />
              </div>
            )}

            {!editCard && (
              <>
                <div className={exampleCardCss}>
                  {(productDiscount !== "0" &&
                    productDiscount &&
                    productDiscount !== null &&
                    productDiscount !== "" && (
                      <>
                        <Paragraph
                          text={productPrice && "£" + productPrice}
                          css={priceCss + " " + discountCss}
                        />
                        <Paragraph
                          text={productDiscount && "£" + productDiscount}
                          css={priceCss}
                        />
                      </>
                    )) || (
                    <Paragraph
                      text={productPrice && "£" + productPrice}
                      css={priceCss}
                    />
                  )}
                </div>
                {!editCard && (
                  <Button
                    css={buttonCss}
                    buttonText={buttonText}
                    textCss={buttonTextCss}
                  />
                )}
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default ProductCard;
