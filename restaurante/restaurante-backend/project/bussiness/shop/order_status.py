from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean, Table, Date, Enum
from sqlalchemy.orm import relationship
from .status import Status
from .order import Order

from ..persistence.base import Base, metadata_obj

class OrderStatus(Base):
    __tablename__ = 'orders'
    Base.metadata
    id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey('orders.id'))
    order = relationship("Order")
    from_status = Column(Enum(Status))
    to_status = Column(Enum(Status))
    date = Column(Date, nullable=False)

    def __init__(self, order: Order, from_status: Status, to_status: Status, date: Date):
        self.order = order
        self.from_status = from_status
        self.to_status = to_status
        self.date = date