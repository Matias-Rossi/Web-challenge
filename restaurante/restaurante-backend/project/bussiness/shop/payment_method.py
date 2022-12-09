from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table, Date
from sqlalchemy.orm import relationship
from bussiness.persistence.base import Base


class PaymentMethod(Base):
    __tablename__ = 'payment_methods'
    Base.metadata
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    
    def __init__(self, name: str):
        self.name = name

    
