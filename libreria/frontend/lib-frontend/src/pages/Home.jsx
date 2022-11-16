import React, { useState } from "react";
import NewsCarousel from "../components/NewsCarousel";
import CategoryList from "../components/CategoryList";
import ProductsList from "../components/ProductsList";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  

  return (
    <div className="m5">
      <main>
        <NewsCarousel />
        {<CategoryList/>}
        {<ProductsList listName="Novedades"/>}
        {<ProductsList listName="Más vendidos"/>}
        <button className="flex float-right items-center justify-center my-3 bg-rose-300 p-2 rounded">Ver productos <HiArrowNarrowRight/></button>
      </main>
      {/* <VerticalDivider/> */}
      <aside className="hidden">
        {/* <TopSales/> */}
        {/* <AsideContactInfo/> */}
      </aside>
    </div>
  );
}

export default Home;
