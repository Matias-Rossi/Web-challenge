import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import HorizontalDivider from "./HorizontalDivider";
import { Link } from "react-router-dom";

function ProductsList({ listName }) {
  const products = Array(10).fill({
    id: 1,
    thumbnail:
      "https://www.planetadelibros.com.ar/usuaris/libros/fotos/206/m_libros/portada_luna-de-pluton_dross_201508312146.jpg",
    name: "Luna de Plutón",
    price: 500,
    author: { name: "Dross" },
  });

  function getProductsCards() {
    let i;
    return products.map((product) => {
      return <ProductCard product={product} key={++i} />;
    });
  }

  return (
    <>
      <HorizontalDivider />

      <div className="mt-5 text-start">
        <h2 className="my-3 ml-2 font-bold">{listName}</h2>
        <ScrollMenu>{getProductsCards()}</ScrollMenu>
      </div>
    </>
  );
}

export default ProductsList;

function ProductCard({ product }) {
  return (
    <li className="pb-3">
      <Link
        className="flex flex-col items-center justify-end w-28 text-black mr-1 rounded-md shadow-md border-separate"
        to={`/producto/${product.id}`}
      >
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-30 rounded-t-md"
        />
        <div className="rounded-b-md w-full bg-black-200 bg-opacity-70 pb-2 ml-1 px-1">
          <h2 className="w-full text-left font-bold my-0.5 ">{product.name}</h2>
          <p className="font-light">{product.author.name}</p>
          <div className="flex justify-end pr-1">
            <p className="block bg-green-300 px-2 py-1 rounded-full">
              ${product.price}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
