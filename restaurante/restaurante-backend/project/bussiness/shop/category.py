from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.orm import relationship
from ..persistence.base import Base, metadata_obj

class Category(Base):
    __tablename__ = 'categories'
    Base.metadata
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(String(500), nullable=False)
    products = relationship("Product", back_populates="category")

    def __init__(self, name: str, description: str):
        self.name = name
        self.description = description

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description
        }