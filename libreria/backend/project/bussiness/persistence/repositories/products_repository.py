from .repository import Repository
from .authors_repository import AuthorsRepository
from bussiness.shop.author import Author
from bussiness.shop.product import Product

class ProductsRepository(Repository):
    def __init__(self, session):
        super().__init__(session, Product)