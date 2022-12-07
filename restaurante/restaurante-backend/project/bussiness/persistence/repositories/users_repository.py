from .repository import Repository
from bussiness.users.user import User

class UsersRepository(Repository):
    def __init__(self, session):
        super().__init__(session, User)