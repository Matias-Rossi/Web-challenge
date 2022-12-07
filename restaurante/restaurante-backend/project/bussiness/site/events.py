from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table, Date
from sqlalchemy.orm import relationship
from ..persistence.base import Base, metadata_obj

class Event(Base):
    __tablename__ = 'events'
    Base.metadata
    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)
    image = Column(String(255), nullable=False)

    def __init__(self, name: str, description: str, image: str):
        self.name = name
        self.description = description
        self.image = image