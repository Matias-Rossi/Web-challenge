import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import hero_extrawurst from "../assets/images/hero_extrawurst.png";
import salchichas_1 from "../assets/images/salchichas_1.png";
import exterior_1 from "../assets/images/exterior_1.png";
import PrimaryButton, { PrimaryButtonLink } from "../components/PrimaryButton";
import { FaArrowRight } from "react-icons/fa";
import ContentBlock from "../components/ContentBlock";
import FlatButton from "../components/FlatButton";
import Spacer from "../components/Spacer";
import PrimaryWhiteButton from "../components/PrimaryWhiteButton";
import ProductGridItem from "../components/ProductGridItem";
import { config } from "../data/config";

function Home() {
  const navigate = useNavigate();

  //const products = ProductRepository.getRecommended();

  return (
    <div>
      <main className="flex flex-col h-100%">
        <HeroHome />
        <div className="h-screen grid grid-rows-2 grid-cols-2">
          {" "}
          {/* Información home */}
          <ContentBlock>
            <h5>Gastronomía alemana de calidad</h5>
            <p>
              EXTRAWURST - Bratwurst Argentina es sinónimo de calidad, frescura
              y sabor. No hace falta viajar a Alemania para experimentar este
              maravilloso y único gusto. Elaboramos nuestros productos sin
              aditivos ni conservantes de ninguna clase. Utilizamos las materias
              primas y especias más frescas. Todo lo que hacemos lo realizamos
              de modo tradicional, a mano y con amor.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus.{" "}
            </p>
            <FlatButton
              text="Ver productos"
              icon={<FaArrowRight />}
              onClick={() => navigate("/tienda")}
            />
          </ContentBlock>
          <div
            className="w-full"
            style={{
              backgroundImage: `url(${salchichas_1})`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="w-full"
            style={{
              backgroundImage: `url(${exterior_1})`,
              backgroundSize: "cover",
            }}
          />
          <ContentBlock>
            <h5>Ambiente auténtico, atención de excelencia</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. <br />
              <br />
              Sed dignissim, metus nec fringilla accumsan, risus sem
              sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
              eget condimentum velit, sit amet feugiat lectus. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. <br />
              <br />
              Curabitur vel bibendum lorem. Morbi convallis convallis diam sit
              amet lacinia. Aliquam in elementum tellus.
            </p>
            <FlatButton
              text="Descubre nuestro restaurante"
              icon={<FaArrowRight />}
              onClick={() => navigate("/restaurante")}
            />
          </ContentBlock>
        </div>
        <Spacer />
        <div className="flex">
          <HomeRecomendations />
          <ContrastCTA
            title="¿Desea disfrutar de la gastronomía alemana en su propio evento?"
            paragraph={
              "Puede realizar su propia fiesta en nuestro restaurante, o contratar un servicio de Catering con toda la variedad y calidad de nuestros productos."
            }
            buttonText={"¡Hagámosolo!"}
            buttonIcon={<FaArrowRight className="text-secondary" />}
            onClick={() => navigate("/contacto")}
          />
        </div>
      </main>
    </div>
  );
}

export default Home;

function HeroHome() {
  return (
    <div
      className="flex-grow h-screen w-full"
      style={{
        backgroundImage: `url(${hero_extrawurst})`,
        backgroundSize: "contain",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <div>
          <hr className="white border-2" />
          <h1 className="text-center text-white" style={{ fontSize: "64px" }}>
            EXTRAWURST
          </h1>
          <hr className="white border-2" />
          <p className="noto-serif font-bold text-center text-white mt-2">
            Perfekt deutsches Essen. Guten Appetit!
          </p>
        </div>
        <div className="mt-11 flex gap-14 justify-center">
          <PrimaryButtonLink
            text="Restaurante"
            icon={<FaArrowRight className="text-white" />}
            to="/restaurante"
          />
          <PrimaryButtonLink
            text="Tienda online"
            icon={<FaArrowRight className="text-white" />}
            to="/tienda"
            isBold={true}
          />
        </div>
      </div>
    </div>
  );
}

function HomeRecomendations() {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    fetch(config.backend_url + "/products/recommended")
      .then((response) => response.json())
      .then(
        (data) => {
          setRecommendedProducts([...data]);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  //const products = JSON.parse('[{"id":1,"description":"Combo ahumado","price":2697.0,"discount_price":2499.0,"is_new":true,"is_recommended":true,"category_id":1,"name":"Combo ahumado","image":"https://static.wixstatic.com/media/fb5415_bb9095e6f766419c96ea436d66ffdd68~mv2.jpg/v1/fill/w_225,h_299,al_c,q_80,usm_0.66_1.00_0.01/fb5415_bb9095e6f766419c96ea436d66ffdd68~mv2.webp","is_discount":true,"is_active":true},{"id":2,"description":"Thüringer Bratwürste","price":799.0,"discount_price":null,"is_new":false,"is_recommended":true,"category_id":1,"name":"Thüringer Bratwürste","image":"https://static.wixstatic.com/media/fb5415_011a49bfd49140228391491bbb2e9d91~mv2.jpg/v1/fill/w_315,h_407,al_c,q_85,usm_0.66_1.00_0.01/fb5415_011a49bfd49140228391491bbb2e9d91~mv2.webp","is_discount":false,"is_active":true},{"id":3,"description":"Bayerische Brezel","price":300.0,"discount_price":null,"is_new":false,"is_recommended":true,"category_id":2,"name":"Bayerische Brezel","image":"https://lh3.ggpht.com/p/AF1QipPuPXSVPjB5TEFzLkBnhps6u_D2hzioCmezVagD=s512","is_discount":false,"is_active":true}]');
  return (
    <div className="py-14 px-28 flex flex-col gap-4 w-full">
      <h3>Nuestras recomendaciones</h3>
      <div className="grid grid-cols-3 grid-rows-1 gap-16 px-12">
        {recommendedProducts.map(
          (product, i) => (
            <ProductGridItem product={product} key={i} />
          ),
          []
        )}
      </div>
    </div>
  );
}

function ContrastCTA({ title, paragraph, buttonText, buttonIcon, onClick }) {
  return (
    <div className="bg-secondary w-1/4">
      <div className="py-16 px-14 flex flex-col items-start gap-8 text-left justify-center h-full">
        <h5 className="text-white">{title}</h5>
        <p className="text-white">{paragraph}</p>
        <PrimaryWhiteButton
          text={buttonText}
          icon={buttonIcon}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
