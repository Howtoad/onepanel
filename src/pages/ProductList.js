import ProductCard from "../templates/ProductCard";

const products = [
  {
    id: 1,
    name: "UPT Vector 3",
    brand: "United Parachute Technologies",
    description:
      "The Vector 3 and Micron from UPT are the most comprehensive, most feature rich and best-selling containers on the market. With a wide range of options to suit every user and every budget, we’ll make sure that your container is truly tailored to you.",
    stock: 50,
    price: "2500.00",
    discount: "0",
    specs: "W: 30.5cm L: 30.5cm H: 30.5cm",
    sizes: "",
    images: [
      "ajkbfdksf3.png",
      "ajkbfdksf.png",
      "ajkbfdksf2.png",
      "ajkbfdksf4.png",
    ],
  },
  {
    id: 2,
    name: "SE Student UPT",
    brand: "United Parachute Technologies",
    description:
      "The Vector SE comes loaded with features, including: Magnetic Riser Covers, Hand Deployment bag, Metal D Handle, Reserve Pin Window, and our Skyhook RSL.",
    stock: 23,
    price: "2100.00",
    discount: "0",
    specs: "W: 28.5cm L: 21.5cm H: 40.5cm",
    sizes: "",
    images: [
      "ajkbfdksf3.png",
      "ajkbfdksf.png",
      "ajkbfdksf2.png",
      "ajkbfdksf4.png",
    ],
  },
  {
    id: 3,
    name: "Sigma Container Tandem System",
    brand: "United Parachute Technologies",
    description:
      "Your brand new Sigma, or Micro Sigma, Tandem system comes loaded features, including: adjustable student harness, Magnetic Riser Covers, adjustable container harness, Double Wide Legpads, Retractable Release Handles, Spectra Reserve Ripcord, Reserve Pin Window, and our Skyhook RSL.",
    stock: 2,
    price: "5500.00",
    discount: "0",
    specs: "W: 40.5cm L: 50.5cm H: 60.5cm",
    sizes: "",
    images: [
      "ajkbfdksf3.png",
      "ajkbfdksf.png",
      "ajkbfdksf2.png",
      "ajkbfdksf4.png",
    ],
  },
  {
    id: 4,
    name: "Sigma Main Tandem Canopy",
    brand: "United Parachute Technologies",
    description:
      "Made by Performance Designs exclusively for United Parachute Technologies, is the preferred choice for use with Sigma and Micro Sigma Tandem Containers.",
    stock: 11,
    price: "4500.00",
    discount: "0",
    specs: "W: 30.2cm L: 31.4cm H: 33.7cm",
    sizes: "",
    images: [
      "ajkbfdksf3.png",
      "ajkbfdksf.png",
      "ajkbfdksf2.png",
      "ajkbfdksf4.png",
    ],
  },
  {
    id: 5,
    name: "Performance Designs Valkyrie",
    brand: "United Parachute Technologies",
    description:
      "Recently field research has revealed shocking info:  an overwhelming majority of high-performance canopy pilot skydivers enjoy spending time in freefall.  Niche market, but we gave it a go.  The Valkyrie’s no one-trick pony (it’s not a pony at all; we don’t sell ponies), built only for comps and sub-terminal openings.  Take it to terminal, and like everyone who’s jumped it before you, be rendered speechless by its superb openings. You’ll find your voice again when someone asks you how fun it was to fly.  Whether you’re filming tandems all day, dedicated to perfecting your swoop, or flocking with your friends, you are going to seriously LOVE flying this canopy.",
    stock: 99,
    price: "3750.00",
    discount: "0",
    specs: "W: 32.5cm L: 31.5cm H: 30.5cm",
    sizes: "",
    images: [
      "ajkbfdksf3.png",
      "ajkbfdksf.png",
      "ajkbfdksf2.png",
      "ajkbfdksf4.png",
    ],
  },
  {
    id: 6,
    name: "Sigma SR340 or SR370 Tandem Reserve Canopy",
    brand: "United Parachute Technologies",
    description:
      "VR-360 in the Sigma/Micro Sigma tandem system for the following reasons. The specifics of Sigma/Micro Sigma tandem operation can be affected by many components.",
    stock: 69,
    price: "4250.00",
    discount: "0",
    specs: "W: 36.9cm L: 36.9cm H: 36.9cm",
    sizes: "",
    images: [
      "ajkbfdksf3.png",
      "ajkbfdksf.png",
      "ajkbfdksf2.png",
      "ajkbfdksf4.png",
    ],
  },
];

const styles = {
  card: "bg-opGrayBg p-1.5 border-solid border-black border w-44",
  image: "m-auto",
  heading: "text-xl font-semibold m-auto max-w-max",
  paragraph: "m-auto max-w-max text-base overflow-hidden leading-5 h-10",
};

const ProductList = () => {
  return (
    <>
      <ProductCard
        key={products[0].id}
        image="./parachute_1.png"
        headingText={products[0].name}
        paragraphText={products[0].description}
        imageCss={styles.image}
        headingCss={styles.heading}
        paragraphCss={styles.paragraph}
        cardCss={styles.card}
      />
    </>
  );
};

export default ProductList;
