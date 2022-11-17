from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean
from ..persistence.base import Base, metadata_obj
from sqlalchemy.orm import relationship
from .category import Category
from .author import book_author
from .image import Image


class Product(Base):
    __tablename__ = 'products'
    Base.metadata
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    price = Column(Float, nullable=False)
    promo_price = Column(Float, nullable=True)
    description = Column(String(500), nullable=False)
    category = relationship("Category", back_populates="products")
    category_id = Column(Integer, ForeignKey('categories.id'), nullable=False)
    stock = Column(Integer, nullable=False)
    thumbnail = Column(String(150), nullable=False)
    images = relationship('Image', backref='product', lazy=True)
    active = Column(Boolean, nullable=False)
    type = Column(String(20))

    __mapper_args__ = {
        "polymorphic_on": type,
        "polymorphic_identity": "product",
    }

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
        
    def __to_dict__(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "promo_price": self.promo_price,
            "description": self.description,
            "category": self.category.__to_dict__(),
            "stock": self.stock,
            "thumbnail": self.thumbnail,
            "images": self.images,
            "active": self.active
        }



class Book(Product):
    #__tablename__ = 'books'
    Base.metadata
    __mapper_args__ = {
        "polymorphic_identity": "book",
    }

    #__mapper_args__={'concrete':True}
    '''
    # Product columns
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    price = Column(Float, nullable=False)
    promo_price = Column(Float, nullable=True)
    description = Column(String(500), nullable=False)
    category = Column(Integer, ForeignKey('category.id'), nullable=False)
    stock = Column(Integer, nullable=False)
    images = relationship('Image', backref='product', lazy=True)
    thumbnail = Column(String(150), nullable=False)
    active = Column(Boolean, nullable=False)
    '''
    # Book columns
    authors = relationship("Author", secondary=book_author)
    editorial = Column(String(50), nullable=False)
    collection = Column(String(50), nullable=False)
    pages = Column(Integer, nullable=False)
    publishing_date = Column(String(50), nullable=False)
    isbn = Column(String(50), nullable=False)



    def __init__(self, name: str, authors:list, editorial: str, collection: str, pages: int,  price: float, promo_price: float, description: str, category: Category, stock: int, thumbnail: str, images: list, publishing_date: str, isbn: str, active: bool):
        super().__init__(name, price, promo_price, description, category, stock, thumbnail, images, active)
        self.authors = authors
        self.editorial = editorial
        self.collection = collection
        self.pages = pages
        self.publishing_date = publishing_date
        self.isbn = isbn

    def __to_dict__(self):
        return super().__to_dict__() | {
            "authors": self.authors,
            "editorial": self.editorial,
            "collection": self.collection,
            "pages": self.pages,
        }
