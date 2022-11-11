from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class Address(Base):
    __tablename__ = 'addresses'
    id = Column(Integer, primary_key=True)
    street = Column(String(100))
    city = Column(String(100))
    state = Column(String(100))
    zip = Column(String(10))

    def __init__(self, street: str, city: str, state: str, zip: str):
        self.street = street
        self.city = city
        self.state = state
        self.zip = zip

    def __repr__(self):
        return f'Address: {self.street}, {self.city}, {self.state}, {self.zip}'