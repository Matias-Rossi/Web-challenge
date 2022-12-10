from flask import Flask, jsonify, session, request, redirect
from flask_session import Session
from flask_cors import CORS, cross_origin
import os
from dotenv import load_dotenv
from security.utils import get_hashed_password, verify_password
from sqlalchemy.orm import Session
from bussiness.persistence.base import engine
from bussiness.persistence.repositories.products_repository import ProductsRepository
from bussiness.persistence.repositories.categories_repository import CategoriesRepository
from bussiness.persistence.repositories.users_repository import UsersRepository
from bussiness.shop.product import Product
from bussiness.shop.category import Category
from bussiness.shop.order import Order
from server.utils import list_to_json
import json

load_dotenv()

app = Flask(__name__)
CORS(app)
app.secret_key = os.getenv("SECRET_KEY")
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"


@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get("/products")
async def get_products():
    with Session(engine) as session:
        products_repository = ProductsRepository(session)
        product_list = products_repository.list()
        return list_to_json(product_list)

@app.get("/products/recommended")
async def get_recommended_products():
    with Session(engine) as session:
        products_repository = ProductsRepository(session)
        product_list = products_repository.list_recommended()
        return list_to_json(product_list)
        

@app.get("/category/<int:category_id>/products")
async def get_products_by_category(category_id: str):
    with Session(engine) as session:
        products_repository = ProductsRepository(session)
        product_list = products_repository.list_by_category_id(category_id)
        return list_to_json(product_list)

@app.post('/login')
async def login():
    username = request.form.get('email')
    password = request.form.get('password')

    with Session(engine) as db_session:
        users_repository = UsersRepository(db_session)
        user = users_repository.get_by_username(username)
        if user:
            if verify_password(password, user.password):
                session['username'] = request.form.get('username')
                print('Correcto')
                return "Logged in", 200
            else:
                print('Contraseña incorrecta')
                return jsonify(desc="Email or password is incorrect"), 401
        else:
            print(f'Usuario incorrecto {username}')
            return jsonify(desc="Email or password is incorrect"), 401
            #return "Email or password is incorrect", 401


    return redirect("/")

@app.post('/isLoggedIn')
async def isLoggedIn():
    if session.get('username') is not None:
        return "Logged in", 200
    else:
        return "Not logged in", 401
    
@app.post('/logout')
async def logout():
    session.pop('username', None)
    