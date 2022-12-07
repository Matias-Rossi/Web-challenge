from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from bussiness.users.roles import Role
from enum import Enum
from bussiness.users.address import Address

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)
    role = Column(Enum(Role))

    def __init__(self, name: str, password: str,role: Role):
        self.name = name
        self.password = password
        self.role = role

class CustomerAccount(User):
    __tablename__ = 'customer_accounts'
    __mapper_args__={'concrete':True}
    # User columns
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)
    role = Column(Enum(Role))
    
    # CustomerAccount columns
    email = Column(String(50), nullable=False)
    phone = Column(String(50), nullable=False)
    address_id = Column(Integer, ForeignKey('addresses.id'))
    
    # Transient attributes
    orders = relationship("Order", back_populates="user")

    def __init__(self, name: str, password: str, email: str, phone: str, address: Address):
        super().__init__(name, password, Role.CUSTOMER)
        self.email = email
        self.phone = phone
        self.address = address    

class SpecialAccount(User):
    __tablename__ = 'special_accounts'
    __mapper_args__={'concrete':True}
    # User columns
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    password = Column(String(50), nullable=False)
    role = Column(Enum(Role))
    
    # SpecialAccount columns
    username = Column(String(50), nullable=False)

    def __init__(self, name: str, password: str, username: str, role: Role):
        if role is not Role.ADMIN and role is not Role.EMPLOYEE:
            raise ValueError("Role must be ADMIN or EMPLOYEE")
        super().__init__(name, password, role)
        self.username = username