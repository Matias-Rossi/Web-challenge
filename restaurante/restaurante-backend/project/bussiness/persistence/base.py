
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base

# Create Base

Base = declarative_base()
print("[LOG]: Base created")

# Create engine and metadata_obj

string = "mysql+mysqlconnector://root:13082001@127.0.0.1:3306/extrawurst"
engine = create_engine(string, echo=True, future=True)
metadata_obj = MetaData(engine)