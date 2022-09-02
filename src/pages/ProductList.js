import { Link } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import ProductCard from "../templates/ProductCard";

const styles = {
  card: "bg-opGrayBg p-1.5 border-solid border-black border w-44 flex flex-col min-h-[300px]",
  image: "m-auto mb-auto",
  heading:
    "text-xl font-semibold mx-auto max-w-max overflow-hidden leading-7 max-h-14",
  paragraph: "mx-auto max-w-max text-base overflow-hidden leading-5 h-10",
};

const ProductList = () => {
  const { data } = useFetch("http://localhost:3001/products");

  return (
    <>
      <section className="grid grid-cols-2 p-1.5 gap-y-2 gap-x-1 mb-20">
        {data && (
          <Link to="/product/new">
            <ProductCard
              key="add"
              image="./images/akar-icons_circle-plus.png"
              imageCss="m-auto"
              cardCss={styles.card + " h-full"}
            />
          </Link>
        )}
        {data &&
          data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={
                  "./images/product_" + product.id + "/" + product.images[0]
                }
                headingText={product.name}
                paragraphText={product.description}
                productID={product.id}
                imageCss={styles.image}
                headingCss={styles.heading}
                paragraphCss={styles.paragraph}
                cardCss={styles.card}
                editCard="True"
              />
            );
          })}
      </section>
    </>
  );
};

export default ProductList;
