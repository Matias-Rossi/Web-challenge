from .repository import Repository
from bussiness.shop.category import Category

class CategoriesRepository(Repository):
    def __init__(self, session):
        super().__init__(session, Category)