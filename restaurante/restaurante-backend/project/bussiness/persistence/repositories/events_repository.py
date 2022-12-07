from .repository import Repository
from bussiness.site.events import Event

class EventsRepository(Repository):
    def __init__(self, session):
        super().__init__(session, Event)