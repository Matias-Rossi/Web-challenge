from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)
    is_admin = Column(Boolean, nullable=False)

    def __init__(self, name: str, email: str, password: str, is_admin: bool):
        self.name = name
        self.email = email
        self.password = password
        self.is_admin = is_admin


class CustomerAccount(User):
    __tablename__ = 'customer_accounts'
    __mapper_args__={'concrete':True}
    # User columns
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)
    is_admin = Column(Boolean, nullable=False)
    # CustomerAccount columns
    address_id = Column(Integer, ForeignKey('addresses.id'))
    
