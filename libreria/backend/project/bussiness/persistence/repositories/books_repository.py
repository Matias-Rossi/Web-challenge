from .repository import Repository
from bussiness.shop.product import Book

class BooksRepository(Repository):
    def __init__(self, session):
        super().__init__(session, Book)