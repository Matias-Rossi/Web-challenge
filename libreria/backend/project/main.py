import json
from fastapi import FastAPI
from sqlalchemy.orm import Session
from bussiness.persistence.base import engine
from bussiness.persistence.repositories.products_repository import ProductsRepository
from bussiness.persistence.repositories.books_repository import BooksRepository
from bussiness.persistence.repositories.authors_repository import AuthorsRepository
from bussiness.shop.product import Product
from bussiness.shop.category import Category
from bussiness.shop.author import Author

# Repositories




app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/products")
async def get_products():
    with Session(engine) as session:
        products_repository = ProductsRepository(session)
        product_list = products_repository.list()
        return product_list

@app.get("/books")
async def get_books():
    with Session(engine) as session:
        books_repository = BooksRepository(session)
        authors_repository = AuthorsRepository(session)
        book_list = books_repository.list_with_authors()
        return book_list