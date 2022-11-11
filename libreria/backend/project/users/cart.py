from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class CartItem(Base):
    __tablename__ = 'cart_items'
    id = Column(Integer, primary_key=True)
    product_id = Column(Integer, ForeignKey('products.id'))
    quantity = Column(Integer, nullable=False)
    cart_id = Column(Integer, ForeignKey('carts.id'))

    def __init__(self, product_id: int, quantity: int, cart_id: int):
        self.product_id = product_id
        self.quantity = quantity
        self.cart_id = cart_id


class Cart(Base):
    __tablename__ = 'carts'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    items = relationship('CartItem', backref='cart', lazy=True)
    total_price = Column(Float, nullable=False)

    def __init__(self, user_id: int, product_id: int, quantity: int, total_price: float):
        self.user_id = user_id
        self.product_id = product_id
        self.quantity = quantity
        self.total_price = total_price

    def __repr__(self):
        return f'Cart: {self.user_id}, {self.product_id}, {self.quantity}, {self.total_price}'