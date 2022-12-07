import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from bussiness.persistence.base import engine
from bussiness.persistence.repositories.products_repository import ProductsRepository
from bussiness.persistence.repositories.categories_repository import CategoriesRepository
from bussiness.shop.product import Product
from bussiness.shop.category import Category

# Repositories




app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/products")
async def get_products():
    with Session(engine) as session:
        products_repository = ProductsRepository(session)
        product_list = products_repository.list()
        return product_list

@app.get("/products/recommended")
async def get_recommended_products():
    with Session(engine) as session:
        products_repository = ProductsRepository(session)
        product_list = products_repository.list_recommended()
        return product_list

@app.get("/category/{category_id}/products")
async def get_products_by_category(category_id: str):
    with Session(engine) as session:
        products_repository = ProductsRepository(session)
        product_list = products_repository.list_by_category_id(category_id)
        return product_list
