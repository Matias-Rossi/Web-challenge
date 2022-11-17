from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean
from ..persistence.base import Base, metadata_obj
from sqlalchemy.orm import relationship


class Category(Base):
    __tablename__ = 'categories'
    Base.metadata
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    description = Column(String(500), nullable=False)
    products = relationship("Product", back_populates="category")
    thumbnail = Column(String(150), nullable=False)

    def __init__(self, name: str, description: str, thumbnail: str):
        self.name = name
        self.description = description
        self.thumbnail = thumbnail

    def __to_dict__(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "thumbnail": self.thumbnail
        }