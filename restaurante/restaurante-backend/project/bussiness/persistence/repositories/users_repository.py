from .repository import Repository
from bussiness.users.user import User

class UsersRepository(Repository):
    def __init__(self, session):
        super().__init__(session, User)

    def get_by_username(self, email):
        return self.session.query(User).filter_by(email=email).first()