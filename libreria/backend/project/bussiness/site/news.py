from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class News(Base):
    __tablename__ = 'news'
    id = Column(Integer, primary_key=True)
    title = Column(String(50), nullable=False)
    summary = Column(String(500), nullable=False)
    description = Column(String(1500), nullable=False)
    image = Column(String(100), nullable=False)

    def __init__(self, title: str, summary:str, description: str, image: str):
        self.title = title
        self.summary = summary
        self.description = description
        self.image = image