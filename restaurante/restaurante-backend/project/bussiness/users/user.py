from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table, Enum
#from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from bussiness.users.roles import Role
from bussiness.users.address import Address
from bussiness.persistence.base import Base
from security.utils import get_hashed_password

class User(Base):
    __tablename__ = 'users'
    __mapper_args__={
        "polymorphic_on": "role_discriminator",
        "polymorphic_identity": "user",
    }
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False)
    password = Column(String(100), nullable=False)
    role_enum = Column(Enum(Role))
    role_discriminator = Column(String(20))

    def __init__(self, name: str, email:str, password: str, role_enum: Role):
        self.email = email
        self.name = name
        self.password = get_hashed_password(password)
        self.role_enum = role_enum
        role_discriminator = "customer" if role_enum is Role.CUSTOMER else "special"

class CustomerAccount(User):
    __tablename__ = None
    __mapper_args__={'polymorphic_identity':'customer'}
    
    # CustomerAccount columns
    phone = Column(String(50), nullable=True)
    #address_id = Column(Integer, ForeignKey('addresses.id'))
    
    # Transient attributes
    addresses = relationship("Address", back_populates="user")
    orders = relationship("Order", back_populates="user")

    def __init__(self, name: str, email: str, password: str, phone: str):
        self.phone = phone
        super().__init__(name, email, password, Role.CUSTOMER)

class SpecialAccount(User):
    __tablename__ = None
    __mapper_args__={
        'polymorphic_identity':'special'
    }

    def __init__(self, name: str, email:str, password: str, role: Role):
        if role is not Role.ADMIN and role is not Role.EMPLOYEE:
            raise ValueError("Role must be ADMIN or EMPLOYEE")
        super().__init__(name, email, password, role)