from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from bussiness.users.roles import Role
from enum import Enum
from bussiness.users.address import Address

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    __mapper_args__={
        "polymorhpic_on": "role",
        "polymorphic_identity": "user",
    }
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False)
    password = Column(String(50), nullable=False)
    role = Column(Enum(Role))

    def __init__(self, name: str, email:str, password: str, role: Role):
        self.email = email
        self.name = name
        self.password = password
        self.role = role

class CustomerAccount(User):
    __mapper_args__={'polymprphic_identity':'customer'}
    
    # CustomerAccount columns
    phone = Column(String(50), nullable=False)
    address_id = Column(Integer, ForeignKey('addresses.id'))
    
    # Transient attributes
    orders = relationship("Order", back_populates="user")

    def __init__(self, name: str, email: str, password: str, phone: str):
        self.phone = phone
        super().__init__(name, email, password, Role.CUSTOMER)

class SpecialAccount(User):
    __mapper_args__={
        'polymorphic_identity':'special'
    }

    def __init__(self, name: str, email:str, password: str, role: Role):
        if role is not Role.ADMIN and role is not Role.EMPLOYEE:
            raise ValueError("Role must be ADMIN or EMPLOYEE")
        super().__init__(name, email, password, role)