import { useState, useEffect } from "react";
import { useHref, useParams } from "react-router-dom";
import Input from "../components/Input";
import useFetch from "../customHooks/useFetch";
import ProductCard from "../templates/ProductCard";
import Select from "react-dropdown-select";

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch("http://localhost:3001/products?id=" + id, {
    headers: { authorization: "Bearer " + "1234" },
  });

  useEffect(() => {
    data && setPName(data[0].name);
    data && setPPrice(data[0].price);
    data && setPDiscount(data[0].discount);
    data && setPDesc(data[0].description);
    data && setPStock(data[0].stock);
    data && setPSpecs(data[0].specs);
    data && setPSizes(data[0].sizes);
  }, [data]);

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

  const [pName, setPName] = useState(undefined);
  const [pPrice, setPPrice] = useState(undefined);
  const [pDiscount, setPDiscount] = useState(undefined);
  const [pDesc, setPDesc] = useState(undefined);
  const [pStock, setPStock] = useState(undefined);
  const [pSpecs, setPSpecs] = useState(undefined);
  const [pSizes, setPSizes] = useState(undefined);
  console.log(pSizes);

  const productData = (data && data[0]) || {
    name: pName,
    description: pDesc,
    stock: pStock,
    price: pPrice,
    discount: pDiscount,
    specs: pSpecs,
    sizes: pSizes,
    images: [""],
  };

  return (
    <>
      <ProductCard
        key={productData.id && productData.id}
        image={
          productData.id &&
          "../images/product_" + productData.id + "/" + productData.images[0]
        }
        headingText={pName}
        paragraphText={pDesc}
        productID={productData.id}
        imageCss={styles.image}
        headingCss={styles.heading}
        paragraphCss={styles.paragraph}
        cardCss={styles.card}
        productPrice={pPrice}
        productDiscount={pDiscount}
        priceCss={styles.price}
        discountCss={styles.discount}
        exampleCardCss={styles.exampleCard}
        buttonCss={styles.button}
        buttonText="Add to cart"
        buttonTextCss={styles.buttonText}
      />

      <section className="p-3">
        {data && (
          <Input
            label="Name"
            inputCss={styles.input}
            labelCss={styles.label}
            pCss={styles.labelText}
            propValue={pName}
            setPropValue={setPName}
          />
        )}
        <Input
          label="Price"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
          propValue={pPrice}
          setPropValue={setPPrice}
        />
        <Input
          label="Discount"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
          propValue={pDiscount}
          setPropValue={setPDiscount}
        />
        <Input
          label="Description"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
          propValue={pDesc}
          setPropValue={setPDesc}
        />
        <Input
          label="Stock"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
          propValue={pStock}
          setPropValue={setPStock}
        />
        <Input
          label="Specs"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
          propValue={pSpecs}
          setPropValue={setPSpecs}
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
              onChange={(pSizes) => setPSizes(pSizes)}
              multi={true}
              dropdownPosition="bottom"
              direction="lrt"
              searchable={false}
              searchBy="size"
              labelField="size"
              valueField="size"
              keepSelectedInList={true}
              contentRenderer={({ props, state, methods }) => <p>Sizes</p>}
            />
          </div>
          <label htmlFor="image" className="ml-3 h-[36px] text-sm">
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
