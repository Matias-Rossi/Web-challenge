from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean
from ..persistence.base import Base, metadata_obj
from sqlalchemy.orm import relationship


class Image(Base):
    __tablename__ = 'images'
    Base.metadata
    id = Column(Integer, primary_key=True)
    url = Column(String(150), nullable=False)
    product_id = Column(Integer, ForeignKey('products.id'))

    def __init__(self, url: str, product_id: int):
        self.url = url
        self.product_id = product_id

    def __repr__(self):
        return f'Image: {self.url}, {self.product_id}'