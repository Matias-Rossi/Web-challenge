import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

function ProductsList({ listName }) {
  return (
    <>
      <hr className=" h-0.5 bg-gray-500 mt-1" />

      <div className="mt-5 text-start">
        <h2 className="my-3 ml-2 font-bold">{listName}</h2>
        <ScrollMenu>
          <ProductCard
            product={{
              thumbnail:
                "https://www.planetadelibros.com.ar/usuaris/libros/fotos/206/m_libros/portada_luna-de-pluton_dross_201508312146.jpg",
              name: "Libro 1",
              price: 500,
            }}
          />
          <ProductCard
            product={{
              thumbnail:
                "https://www.planetadelibros.com.ar/usuaris/libros/fotos/206/m_libros/portada_luna-de-pluton_dross_201508312146.jpg",
              name: "Libro 2",
              price: 500,
            }}
          />
          <ProductCard
            product={{
              thumbnail:
                "https://www.planetadelibros.com.ar/usuaris/libros/fotos/206/m_libros/portada_luna-de-pluton_dross_201508312146.jpg",
              name: "Libro 3",
              price: 500,
            }}
          />
          <ProductCard
            product={{
              thumbnail:
                "https://www.planetadelibros.com.ar/usuaris/libros/fotos/206/m_libros/portada_luna-de-pluton_dross_201508312146.jpg",
              name: "Libro 4",
              price: 500,
            }}
          />
          <ProductCard
            product={{
              thumbnail:
                "https://www.planetadelibros.com.ar/usuaris/libros/fotos/206/m_libros/portada_luna-de-pluton_dross_201508312146.jpg",
              name: "Libro 5",
              price: 500,
            }}
          />
          <ProductCard
            product={{
              thumbnail:
                "https://www.planetadelibros.com.ar/usuaris/libros/fotos/206/m_libros/portada_luna-de-pluton_dross_201508312146.jpg",
              name: "Libro 6",
              price: 500,
            }}
          />
        </ScrollMenu>
      </div>
    </>
  );
}

export default ProductsList;

function ProductCard({ product }) {
  return (
    <div
      className="flex flex-col items-center justify-end w-24 h-32 text-white mr-1"
      style={{
        backgroundImage: `url(${product.thumbnail})`,
        backgroundSize: "cover",
      }}
    >
      <p className="pb-2 bg-black bg-opacity-70 w-full text-center">
        {product.name} ${product.price}
      </p>
    </div>
  );
}
