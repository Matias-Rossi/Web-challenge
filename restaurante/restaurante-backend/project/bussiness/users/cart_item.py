from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class CartItem(Base):
    __tablename__ = 'cart_item'
    id = Column(Integer, primary_key=True)
    cart_id = Column(Integer, ForeignKey('cart.id'))
    cart = relationship('Cart', back_populates='items')
    product_id = Column(Integer, ForeignKey('product.id'))
    product = relationship('Product', back_populates='cart_items')
    quantity = Column(Integer, nullable=False)

    def __init__(self, cart_id: int, product_id: int, quantity: int):
        self.cart_id = cart_id
        self.product_id = product_id
        self.quantity = quantity