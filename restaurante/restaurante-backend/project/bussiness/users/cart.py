from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class Cart(Base):
    __tablename__ = 'cart'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship('User', back_populates='cart')
    items = relationship('CartItem', back_populates='cart')

    def __init__(self, user_id: int):
        self.user_id = user_id