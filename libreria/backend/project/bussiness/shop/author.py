from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.orm import relationship
#from .product import book
from ..persistence.base import Base

book_author = Table(
    'book_author', Base.metadata,
    Column('author_id', Integer, ForeignKey('authors.id')), 
    Column('book_id', Integer, ForeignKey('products.id')),
    )

class Author(Base):
    __tablename__ = 'authors'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    biography = Column(String(500), nullable=False)
    books = relationship("Book", secondary=book_author, back_populates="authors")
    image = Column(String(150), nullable=False)

    def __init__(self, name: str, biography: str, image: str):
        self.name = name
        self.biography = biography
        self.image = image
