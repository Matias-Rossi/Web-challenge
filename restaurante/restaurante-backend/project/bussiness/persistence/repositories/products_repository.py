from .repository import Repository
from bussiness.shop.product import Product

class ProductsRepository(Repository):
    def __init__(self, session):
        super().__init__(session, Product)

    def list_recommended(self):
        return self.session.query(Product).filter(Product.is_recommended == True).all()

    def list_by_category_id(self, category_id):
        return self.session.query(Product).filter(Product.category_id == category_id).all()