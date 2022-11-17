from .repository import Repository
from bussiness.shop.author import Author
from bussiness.shop.product import Product, Book

class AuthorsRepository(Repository):
    def __init__(self, session):
        super().__init__(session, Author)

    def get_from_book_id(self, id):
        query = self.session.query(Author).filter(Author.books.any(Book.id == id))
        return query