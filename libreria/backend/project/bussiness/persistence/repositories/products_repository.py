# Source https://www.youtube.com/watch?v=l_7ZpHE4EEY
from ...shop.product import Product

class ProductsRepository:
    def __init__(self, session):
        self.session = session

    def get(self, **filters):
        pass

    def list(self, **filters):
        return self.session.query(Product).all()

    def add(self, name:str, price:float, promo_price:float, description:str, category:int, stock:int, thumbnail:str, images:list, active:bool):
        product = Product(
            name=name,
            price=price,
            promo_price=promo_price,
            description=description,
            category=category,
            stock=stock,
            thumbnail=thumbnail,
            images=images,
            active=active, 
            )
        self.session.add(product)
        return product

    def update(self, **kwargs):
        pass

    def delete(self, id_):
        pass