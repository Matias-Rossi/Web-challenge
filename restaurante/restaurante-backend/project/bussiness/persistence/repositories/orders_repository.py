from .repository import Repository
from bussiness.shop.order import Order

class CategoriesRepository(Repository):
    def __init__(self, session):
        super().__init__(session, Order)