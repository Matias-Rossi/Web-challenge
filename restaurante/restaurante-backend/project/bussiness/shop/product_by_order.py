from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table, Date
from sqlalchemy.orm import relationship
from ..persistence.base import Base, metadata_obj
from bussiness.shop.product import Product
from bussiness.shop.order import Order

class ProductByOrder(Base):
    __tablename__ = 'productsByOrder'
    Base.metadata
    product_id = Column(Integer, ForeignKey('products.id'), primary_key=True)
    product = relationship("Product")
    order_id = Column(Integer, ForeignKey('orders.id'), primary_key=True)
    order = relationship("Order")
    quantity = Column(Integer, nullable=False)
    unit_price = Column(Float, nullable=False)

    def __init__(self, product: Product, order: Order, quantity: int, unit_price: float):
        self.product = product
        self.order = order
        self.quantity = quantity
        self.unit_price = unit_price
