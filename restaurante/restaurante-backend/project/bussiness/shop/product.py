from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.orm import relationship
from ..persistence.base import Base, metadata_obj
from .category import Category

# TODO: Agregar estadística de ventas, soporte para más imágenes y estado de "agotado"

class Product(Base):
    __tablename__ = 'products'
    Base.metadata
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(String(500), nullable=False)
    category_id = Column(Integer, ForeignKey('categories.id'), nullable=False)
    category = relationship("Category", back_populates="products")
    price = Column(Float, nullable=False)
    image = Column(String(200), nullable=False)
    discount_price = Column(Float, nullable=True)
    is_discount = Column(Boolean, nullable=False)
    is_new = Column(Boolean, nullable=False)
    is_active = Column(Boolean, nullable=False)
    is_recommended = Column(Boolean, nullable=False)

    def __init__(self, name: str, description: str, price: float, image: str, discount_price: float, is_discount: bool, is_new: bool, is_active: bool, is_recommended: bool, category: Category):
        self.name = name
        self.description = description
        self.price = price
        self.image = image
        self.discount_price = discount_price
        self.is_discount = is_discount
        self.is_new = is_new
        self.is_active = is_active
        self.is_recommended = is_recommended
        self.category = category

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "image": self.image,
            "discount_price": self.discount_price,
            "is_discount": self.is_discount,
            "is_new": self.is_new,
            "is_active": self.is_active,
            "is_recommended": self.is_recommended,
            "category": self.category.to_dict()
        }


""" 
book_author = Table(
    'book_author', Base.metadata, #Base.metadata
    Column('id', Integer, primary_key=True),
    Column('book_id', Integer, ForeignKey('products.id')),
    Column('author_id', Integer, ForeignKey('authors.id')), 
    )

class Author(Base):
    __tablename__ = 'authors'
    Base.metadata
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    biography = Column(String(500), nullable=False)
    books = relationship("Book", secondary=book_author, back_populates="authors")
    image = Column(String(150), nullable=False)

    def __init__(self, name: str, biography: str, image: str):
        self.name = name
        self.biography = biography
        self.image = image

    def __to_dict__(self):
        return {
            "id": self.id,
            "name": self.name,
            "biography": self.biography,
            "image": self.image
        }
 """