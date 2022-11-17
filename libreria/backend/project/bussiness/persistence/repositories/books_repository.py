from .repository import Repository
from bussiness.shop.product import Book
from bussiness.persistence.repositories.authors_repository import AuthorsRepository

class BooksRepository(Repository):
    def __init__(self, session):
        super().__init__(session, Book)

    def list_with_authors(self, **filters):
        authorsRepository = AuthorsRepository(self.session)

        query = self.session.query(self._class)
        for key, value in filters.items():
            query = query.filter(getattr(self._class, key) == value)
        books = query.all()
        books = [book.__to_dict__() for book in books]
        # Get authors
        for book in books:
            authors = authorsRepository.get_from_book_id(book.get("id"))
            authors = [author.__to_dict__() for author in authors]
            book.update({"authors": authors})
            #book.update({"authors": ["juanito","carlitos"]})# = authorsRepository.get_from_book_id(book.id)
            # book.update({"authors": authorsRepository.get_from_book_id(book.get("id"))})# = authorsRepository.get_from_book_id(book.id)
        return books