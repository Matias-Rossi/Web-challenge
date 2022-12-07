from sqlalchemy import create_engine
from sqlalchemy.orm import Session

engine = create_engine("127.0.0.1:3306", echo=True, future=True)

with Session(engine) as session:
    pass