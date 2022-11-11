from fastapi import FastAPI
from sqlalchemy.orm import session_maker
from ..bussiness.persistence.repositories.products_repository import ProductsRepository
from ..bussiness.shop.product import Product

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/products")
async def get_products():
    with session_maker() as session:
        products_repo = ProductsRepository(session)
        products = session.query(Product).all()
        return {
            "bookings": [product.dict() for product in products]
        }