from .repository import Repository
from bussiness.shop.product import Product

class ProductsRepository(Repository):
    def __init__(self, session):
        super().__init__(session, Product)