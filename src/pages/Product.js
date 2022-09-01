import { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/Input";
import useFetch from "../customHooks/useFetch";
import ProductCard from "../templates/ProductCard";
import Select from "react-dropdown-select";

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch("http://localhost:3001/products?id=" + id, {
    headers: { authorization: "Bearer " + "1234" },
  });

  const [values, setValues] = useState("");
  console.log(values);
  console.log(data);

  const styles = {
    card: "bg-opGrayBg p-1.5 border-solid border-black border w-44 flex flex-col min-h-[300px] mx-auto mt-12",
    image: "m-auto mb-auto",
    heading:
      "text-xl font-semibold mx-auto max-w-max overflow-hidden leading-7 max-h-14",
    paragraph: "mx-auto max-w-max text-base overflow-hidden leading-5 h-10",
    price: "text-base",
    discount: "line-through text-gray-500",
    example: "mt-4 mr-4",
    button: "bg-opGreen h-[30px] w-[90px] my-auto",
    label: "flex max-w-[350px] mx-auto my-2 border border-black solid ",
    input: "w-full bg-opGrayBg pl-2",
    labelText: "w-32 ml-2",
  };

  return (
    <>
      {data && (
        <ProductCard
          key={data[0].id}
          image={"../images/product_" + data[0].id + "/" + data[0].images[0]}
          headingText={data[0].name}
          paragraphText={data[0].description}
          productID={data[0].id}
          imageCss={styles.image}
          headingCss={styles.heading}
          paragraphCss={styles.paragraph}
          cardCss={styles.card}
          productPrice={data[0].price}
          productDiscount={data[0].discount}
          priceCss={styles.price}
          discountCss={styles.discount}
          exampleCardCss={styles.exampleCard}
          buttonCss={styles.button}
          buttonText="Add to cart"
          buttonTextCss={styles.buttonText}
        />
      )}
      <section className="p-3">
        <Input
          label="Name"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
        />
        <Input
          label="Price"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
        />
        <Input
          label="Discount"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
        />
        <Input
          label="Description"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
        />
        <Input
          label="Stock"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
        />
        <Input
          label="Specs"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
        />
        <div className="flex flex-row">
          <div className="w-[136px] h-[36px]">
            <Select
              options={[
                {
                  size: "S",
                },
                {
                  size: "M",
                },
                {
                  size: "L",
                },
                {
                  size: "XL",
                },
                {
                  size: "XXL",
                },
              ]}
              onChange={(values) => setValues(values)}
              multi={true}
              dropdownPosition="bottom"
              direction="lrt"
              searchable={false}
              searchBy="size"
              labelField="size"
              valueField="size"
              keepSelectedInList={true}
            />
          </div>
          <label htmlFor="image" className="ml-1 h-[36px] text-sm">
            Primary image
          </label>
          <select name="image" id="image" className="h-[36px]">
            {data &&
              data[0].images.map((image) => {
                return (
                  <option key={image} value={image}>
                    {image}
                  </option>
                );
              })}
          </select>
        </div>
      </section>
    </>
  );
};

export default Product;
