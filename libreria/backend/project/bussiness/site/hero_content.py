from sqlalchemy import Column, Integer, String, ForeignKey, Float, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class HeroContent(Base):
    __tablename__ = 'hero_content'
    id = Column(Integer, primary_key=True)
    title = Column(String(50), nullable=False)
    description = Column(String(500), nullable=False)
    image = Column(String(100), nullable=False)

    def __init__(self, title: str, description: str, image: str):
        self.title = title
        self.description = description
        self.image = image