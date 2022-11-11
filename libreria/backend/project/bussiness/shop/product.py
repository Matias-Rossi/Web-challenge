from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean
from sqlalchemy.ext.declarative import declarative_base, relationship
from category import Category
from author import Author, book_author
from image import Image

Base = declarative_base()

class Product(Base):
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    price = Column(Float, nullable=False)
    promo_price = Column(Float, nullable=True)
    description = Column(String(500), nullable=False)
    category = Column(Integer, ForeignKey('category.id'), nullable=False)
    stock = Column(Integer, nullable=False)
    thumbnail = Column(String(150), nullable=False)
    images = relationship('Image', backref='product', lazy=True)
    active = Column(Boolean, nullable=False)

    def __init__(self, name: str, price: float, promo_price: float, description: str, category: Category, stock: int, thumbnail: str, images: list, active: bool):
        self.name = name
        self.price = price
        self.promo_price = promo_price
        self.description = description
        self.category = category
        self.stock = stock
        self.thumbnail = thumbnail
        self.images = images
        self.active = active



class Book(Product):
    __tablename__ = 'books'
    __mapper_args__={'concrete':True}
    # Product columns
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    price = Column(Float, nullable=False)
    promo_price = Column(Float, nullable=True)
    description = Column(String(500), nullable=False)
    category = Column(Integer, ForeignKey('category.id'), nullable=False)
    stock = Column(Integer, nullable=False)
    thumbnail = Column(String(150), nullable=False)
    active = Column(Boolean, nullable=False)
    # Book columns
    authors = relationship("Author", secondary=book_author)
    editorial = Column(String(50), nullable=False)
    collection = Column(String(50), nullable=False)
    pages = Column(Integer, nullable=False)


    def __init__(self, name: str, authors:list, editorial: str, collection: str, pages: int,  price: float, promo_price: float, description: str, category: Category, stock: int, thumbnail: str, images: list):
        super().__init__(name, authors, editorial, collection, pages, price, promo_price, description, category, stock, thumbnail)
        self.authors = authors
        self.editorial = editorial
        self.collection = collection
        self.pages = pages
