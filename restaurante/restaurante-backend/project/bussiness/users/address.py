from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class Address(Base):
    __tablename__ = 'addresses'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    user = relationship("User", back_populates="addresses")
    street = Column(String(100))
    street_number = Column(Integer)
    localidad_neighborhood = Column(String(100))
    municipalidad = Column(String(100))
    province = Column(String(100))

    def __init__(self, user: str, street: str, street_number: int, localidad_neighborhood: str, municipalidad: str, province: str):
        self.street = street
        self.user = user
        self.street_number = street_number
        self.localidad_neighborhood = localidad_neighborhood
        self.municipalidad = municipalidad
        self.province = province

    def __repr__(self):
        return f"Address({self.id}, {self.user}, {self.street}, {self.street_number}, {self.localidad_neighborhood}, {self.municipalidad}, {self.province})"