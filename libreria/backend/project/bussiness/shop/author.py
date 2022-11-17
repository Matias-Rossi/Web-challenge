from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.orm import relationship
#from .product import *
from ..persistence.base import Base, metadata_obj

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
