import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import HorizontalDivider from "./HorizontalDivider";

function CategoryList() {
  return (
    <>
      <HorizontalDivider/>
      <div className="mt-5 text-start mb-3">
        <h2 className="my-3 ml-2 font-bold">Categorías</h2>
        <ScrollMenu>
          <CategoryCard
            category={{
              thumbnail:
                "https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg",
              name: "Categoria",
            }}
          />
          <CategoryCard
            category={{
              thumbnail:
                "https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg",
              name: "Categoria",
            }}
          />
          <CategoryCard
            category={{
              thumbnail:
                "https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg",
              name: "Categoria",
            }}
          />
          <CategoryCard
            category={{
              thumbnail:
                "https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg",
              name: "Categoria",
            }}
          />
          <CategoryCard
            category={{
              thumbnail:
                "https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg",
              name: "Categoria",
            }}
          />
          <CategoryCard
            category={{
              thumbnail:
                "https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg",
              name: "Categoria",
            }}
          />
        </ScrollMenu>
      </div>
    </>
  );
}

export default CategoryList;

function CategoryCard({ category }) {
  return (
    <div
      className="flex flex-col items-center justify-end w-32 h-32 text-white mr-1"
      style={{
        backgroundImage: `url(${category.thumbnail})`,
        backgroundSize: "cover",
      }}
    >
      <p className="pb-2 bg-black bg-opacity-70 w-full text-center">
        {category.name}
      </p>
    </div>
  );
}
