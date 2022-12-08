import React, { useState, useEffect } from "react";
import ProductGridItem from "~/components/ProductGridItem";
import { FaExclamationTriangle } from "react-icons/fa";
import { config } from "../data/config";

function Tienda() {
  const [category, setCategory] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.backend_url + "/category/" + category + "/products")
      .then((response) => response.json())
      .then(
        (data) => {
          setProducts([...data]);
        },
        (error) => {
          console.error(error);
        }
      );
  }, [category]);

  return (
    <main>
      <div className="mt-12">
        <h3 className="text-center">Tienda online</h3>
        <div className="flex w-full justify-center items-center">
          <CookingWarning />
        </div>
      </div>
      <nav className="flex w-full justify-center mt-1">
        <div className="flex roboto-slab gap-2">
          <span className="text-base">Filtrar según:</span>
          <ul className="flex gap-2 items-center">
            <CategorySelector
              categoryId="1"
              categoryName="Salchichas"
              selectedCategory={category}
              onClick={() => setCategory(1)}
            />
            <VerticalDivider />
            <CategorySelector
              categoryId="2"
              categoryName="Salsas y más"
              selectedCategory={category}
              onClick={() => setCategory(2)}
            />
          </ul>
        </div>
      </nav>
      <div className="flex w-full flex-col justify-center items-center">
        <ProductGrid products={products} />
      </div>
    </main>
  );
}

export default Tienda;

function CategorySelector({
  categoryName,
  categoryId,
  selectedCategory,
  onClick,
}) {
  return (
    <li
      className={`hover:cursor-pointer font-bold ${
        selectedCategory == categoryId ? "text-primary" : "text-black-50"
      }`}
      onClick={onClick}
    >
      {categoryName}
    </li>
  );
}

function VerticalDivider() {
  return <div className="w-0.5 self-stretch bg-black" />;
}

function ProductGrid({ products }) {
  return (
    <div className="grid mx-36 my-14 grid-cols-4 gap-x-8 gap-y-12 w-3/4">
      {products.map(
        (product, index) => (
          <ProductGridItem product={product} key={index} />
        ),
        []
      )}
    </div>
  );
}

function CookingWarning() {
  return (
    <div
      className="rounded-lg w-1/2 p-4 my-4"
      style={{ backgroundColor: "#E8E8E8" }}
    >
      <div className="flex gap-4 items-center mb-2">
        <FaExclamationTriangle className="text-2xl" />
        <h5>Sobre la cocción de las salchichas</h5>
      </div>
      <p>
        Las salchichas generalmente se hacen a la plancha, sartén o a la
        parrilla. Los pueden colocar sobre la parrilla directamente congeladas.
        Deberán tener un color marón mas no negro, si los deja mucho tiempo en
        la parrilla perderán su jugosidad, quedando finalmente secos. No se
        sirven hervidas.
      </p>
    </div>
  );
}
