import React, { useState } from "react";
import ProductBasicInfo from "../components/ProductBasicInfo";
import ProductDetails from "../components/ProductDetails";

function ProductDetailPage() {
  const author = {
    name: "Dross",
    biography: "Ángel David Revilla Lenoci, más conocido como Dross Rotzank o simplemente Dross, es un youtuber, escritor y periodista venezolano nacionalizado argentino.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/%C3%81ngel_David_Revilla_2019.png",
  }

  const product = {
    thumbnail:
      "https://www.planetadelibros.com.ar/usuaris/libros/fotos/206/m_libros/portada_luna-de-pluton_dross_201508312146.jpg",
    name: "Luna de Plutón",
    descripcion: "En un lejano parque de diversiones y en plena misión secreta para defender a su amada luna de un peligroso emperador, la joven Claudia, hija de Metallus, conoce a Knaach, y juntos se embarcan en una odisea de sucesos desafortunados que desatarán una verdadera guerra galáctica.",
    price: 500,
    collection: "No aplica",
    pages: 648,
    publishing_date: "05/07/2015",
    isbn: "465132196884",
    author: author
  };

  return (
    <div className="m5">
      <main>
        <ProductBasicInfo product={product} />
        <ProductDetails product={product}/>

      </main>
    </div>
  );
}

export default ProductDetailPage;