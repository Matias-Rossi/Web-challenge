import React from "react";
import HorizontalDivider from "./HorizontalDivider";
import { Link } from "react-router-dom";

function ProductDetails({ product }) {
  return (
    <>
      <HorizontalDivider />
      <div className="mt-2 text-justify">
        <h2 className="font-bold mb-1">Descripción</h2>
        {<p>{product.descripcion}</p>}
      </div>
      <BookDetails book={product} />
      {/* if its a book */}
    </>
  );
}

export default ProductDetails;

function BookDetails({ book }) {
  return (
    <div className="text-left mt-1">
      <HorizontalDivider />
      <p className="mb-1 mt-2">
        <b>Colección:</b> {book.collection}
      </p>
      <p className="mb-1">
        <b>Cantidad de páginas:</b> {book.pages}
      </p>
      <p className="mb-1">
        <b>ISBN:</b> {book.isbn}
      </p>
      <AuthorCard author={book.author} />
    </div>
  );
}

function AuthorCard({ author }) {
  return (
    <div className="flex items-center p-2 bg-blue-600 rounded-xl shadow-md text-white my-5">
      <img
        src={author.image}
        alt={author.name}
        className="h-16 w-16 rounded-full object-cover"
      />
      <div className="ml-2 px-2">
        <p className="text-lg">
          Acerca de{" "}
          <Link to="" className="font-bold underline">
            {author.name}
          </Link>
        </p>{" "}
        {/* TODO Route */}
        <p className="text-justify text-sm">{author.biography}</p>
      </div>
    </div>
  );
}
