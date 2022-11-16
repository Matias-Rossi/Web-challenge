import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function ProductBasicInfo({ product }) {
    return (
        <div
          className="grid grid-rows-1"
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <img src={product.thumbnail} alt={product.name} />
          <div className="text-start ml-4">
            <h1 className="mt-0 mb-1 break-words">{product.name}</h1>
            <p className="font-light my-1">
              por{" "}
              <a className="font-bold" href="">
                Dross
              </a>
            </p>{" "}
            {/* TODO Link a autores */}
            <p className="font-light my-1">
              Editorial{" "}
              <a className="font-bold" href="">
                Planeta
              </a>
            </p>{" "}
            {/* TODO Link a editorial */}
            <p className="text-2xl">${product.price}</p>
            <p className="text-green-600 mt-1">En stock</p>
            <div className="flex justify-end">
              <button className="flex mt-4 rounded-lg border bg-blue-500 text-white p-2">
                <FaShoppingCart className="mr-1" />
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      );
}

export default ProductBasicInfo