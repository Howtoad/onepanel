import { useState, useEffect } from "react";
import { useHref, useParams } from "react-router-dom";
import Input from "../components/Input";
import useFetch from "../customHooks/useFetch";
import ProductCard from "../templates/ProductCard";
import Select from "react-dropdown-select";
import Button from "../components/Button";

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch("http://localhost:3001/products?id=1");

  const addProduct = async function () {
    fetch("http://localhost:3001/products/", {
      method: "POST",
      headers: {
        authorization: "Bearer " + "1234",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: pName,
        price: pPrice,
        discount: pDiscount,
        description: pDesc,
        stock: pStock,
        specs: pSpecs,
        sizes: pSizes,
        images: pImgs,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success: ", data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const updateProduct = async function () {
    fetch("http://localhost:3001/products/" + id, {
      method: "PATCH",
      headers: {
        authorization: "Bearer " + "1234",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: pName,
        price: pPrice,
        discount: pDiscount,
        description: pDesc,
        stock: pStock,
        specs: pSpecs,
        sizes: pSizes,
        images: pImgs,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success: ", data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  useEffect(() => {
    data && data[0] && setPName(data[0].name);
    data && data[0] && setPPrice(data[0].price);
    data && data[0] && setPDiscount(data[0].discount);
    data && data[0] && setPDesc(data[0].description);
    data && data[0] && setPStock(data[0].stock);
    data && data[0] && setPSpecs(data[0].specs);
    data && data[0] && setPSizes(data[0].sizes);
    data && data[0] && setPImgs(data[0].images);
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

  const [pName, setPName] = useState("name");
  const [pPrice, setPPrice] = useState("price");
  const [pDiscount, setPDiscount] = useState("0");
  const [pDesc, setPDesc] = useState("description");
  const [pStock, setPStock] = useState("stock");
  const [pSpecs, setPSpecs] = useState("specs");
  const [pSizes, setPSizes] = useState(undefined);
  const [pImgs, setPImgs] = useState([]);

  const productData = (data && data[0] && data[0]) || {
    name: pName,
    description: pDesc,
    stock: pStock,
    price: pPrice,
    discount: pDiscount,
    specs: pSpecs,
    sizes: pSizes,
    images: pImgs,
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
        <Input
          label="Name"
          inputCss={styles.input}
          labelCss={styles.label}
          pCss={styles.labelText}
          propValue={pName}
          setPropValue={setPName}
        />
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
            {productData.images.map((image) => {
              return (
                <option key={image} value={image}>
                  {image}
                </option>
              );
            })}
          </select>
        </div>
      </section>
      <div
        onClick={() => {
          (id !== "new" && updateProduct()) || addProduct();
        }}
      >
        <Button buttonText="SAVE CHANGES" css="m-auto bg-OpGrayBg h-12 w-32" />
      </div>
    </>
  );
};

export default Product;
