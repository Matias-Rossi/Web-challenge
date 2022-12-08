from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from sqlalchemy.orm import Session
from bussiness.persistence.base import engine
from bussiness.persistence.repositories.products_repository import ProductsRepository
from bussiness.persistence.repositories.categories_repository import CategoriesRepository
from bussiness.shop.product import Product
from bussiness.shop.category import Category
from server.utils import list_to_json
import json

app = Flask(__name__)
CORS(app)


@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get("/products")
def get_products():
    with Session(engine) as session:
        products_repository = ProductsRepository(session)
        product_list = products_repository.list()
        return list_to_json(product_list)

@app.get("/products/recommended")
def get_recommended_products():
    with Session(engine) as session:
        products_repository = ProductsRepository(session)
        product_list = products_repository.list_recommended()
        return list_to_json(product_list)
        

@app.get("/category/<int:category_id>/products")
def get_products_by_category(category_id: str):
    with Session(engine) as session:
        products_repository = ProductsRepository(session)
        product_list = products_repository.list_by_category_id(category_id)
        return list_to_json(product_list)