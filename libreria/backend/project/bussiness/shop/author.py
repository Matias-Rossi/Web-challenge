from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

book_author = Table(
    'book_author', Base.metadata, 
    Column('author_id', Integer, ForeignKey('authors.id')), 
    Column('book_id', Integer, ForeignKey('books.id'))
    )


class Author(Base):
    __tablename__ = 'authors'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    books = relationship("Book", secondary=book_author)

    def __init__(self, name: str):
        self.name = name
