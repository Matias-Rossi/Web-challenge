from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table, Date
from sqlalchemy.orm import relationship
from ..persistence.base import Base, metadata_obj
from bussiness.persistence.users.user import User
from bussiness.persistence.users.address import Address

class Order(Base):
    __tablename__ = 'orders'
    Base.metadata
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship("User", back_populates="orders")
    price = Column(Float, nullable=False)
    creation_date = Column(Date, nullable=False)
    address_id = Column(Integer, ForeignKey('addresses.id'))
    address = relationship("Address")
    payment_method = Column(Integer, ForeignKey('payment_methods.id'))
    payed = Column(Boolean, nullable=False)

    def __init__(self, user: User, price: float, creation_date: Date, address: Address, payment_method: int, payed: bool):
        self.user = user
        self.price = price
        self.creation_date = creation_date
        self.address = address
        self.payment_method = payment_method
        self.payed = payed
