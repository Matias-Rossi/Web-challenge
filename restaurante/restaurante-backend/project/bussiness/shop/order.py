from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table, Date
from sqlalchemy.orm import relationship
from bussiness.persistence.base import Base
from bussiness.users.user import CustomerAccount
from bussiness.users.address import Address

class Order(Base):
    __tablename__ = 'orders'
    Base.metadata
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    user = relationship("CustomerAccount", back_populates="orders", foreign_keys=[user_id])
    price = Column(Float, nullable=False)
    creation_date = Column(Date, nullable=False)
    address_id = Column(Integer, ForeignKey('addresses.id'))
    address = relationship("Address")
    payment_method = Column(Integer, ForeignKey('payment_methods.id'))
    payed = Column(Boolean, nullable=False)

    def __init__(self, user: CustomerAccount, price: float, creation_date: Date, address: Address, payment_method: int, payed: bool):
        self.user = user
        self.price = price
        self.creation_date = creation_date
        self.address = address
        self.payment_method = payment_method
        self.payed = payed
