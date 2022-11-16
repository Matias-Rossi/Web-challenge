from .repository import Repository
from bussiness.shop.author import Author

class AuthorsRepository(Repository):
    def __init__(self, session):
        super().__init__(session, Author)