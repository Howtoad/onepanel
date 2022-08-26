import useFetch from "../customHooks/useFetch";
import ProductCard from "../templates/ProductCard";

const styles = {
  card: "bg-opGrayBg p-1.5 border-solid border-black border w-44",
  image: "m-auto",
  heading: "text-xl font-semibold m-auto max-w-max",
  paragraph: "m-auto max-w-max text-base overflow-hidden leading-5 h-10",
};

const ProductList = () => {
  const { data } = useFetch("http://localhost:3001/products", {
    headers: { authorization: "Bearer " + "1234" },
  });

  return (
    <>
      <section className="grid grid-cols-2 p-1.5 gap-y-2 gap-x-1">
        {data[0] &&
          data.map((product) => {
            console.log(product);
            return (
              <ProductCard
                key={product.id}
                image={product.images[0]}
                headingText={product.name}
                paragraphText={product.description}
                imageCss={styles.image}
                headingCss={styles.heading}
                paragraphCss={styles.paragraph}
                cardCss={styles.card}
              />
            );
          })}
      </section>
    </>
  );
};

export default ProductList;
