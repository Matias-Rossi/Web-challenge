import React from "react";
import { Link } from "react-router-dom";
import brezel from "../assets/images/brezel.png";

function ProductGridItem({ product }) {
  return (
    <Link className="flex flex-col items-start self-stretch grow gap-2">
      <img
        src={product.image}
        alt="brezel"
        className="h-72 w-80 object-cover"
      />
      <h6 className="text-xl">{product.name}</h6>
      {product.is_discount ? (
        <p className="text-black text-xl">${product.discount_price} <span className="line-through text-base text-black-50 decoration-black-50">${product.price}</span></p>
      ) : (
        <p className="text-black text-xl">${product.price}</p>
      )}

      {/* TODO Agregar oferta, tag de nuevo, imagen y que el producto pase por parametro */}
    </Link>
  );
}

export default ProductGridItem;
