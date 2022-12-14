class Repository:
    def __init__(self, session, _class):
        self.session = session
        self._class = _class

    def get(self, **filters):
        query = self.session.query(self._class)
        for key, value in filters.items():
            query = query.filter(getattr(self._class, key) == value)
        return query.all()

    def list(self, **filters):
        return self.session.query(self._class).all()

    def createAndAdd(self, **kwargs):
        instance = self._class(**kwargs)
        self.session.add(instance)
        self.session.commit()
        return instance

    def addAll(self, instances):
        self.session.add_all(instances)
        self.session.commit()
        return instances

    def add(self, instance):
        self.session.add(instance)
        self.session.commit()
        return instance

    def update(self, instance):
        self.session.update(instance)
        self.session.commit()
        return instance

    def delete(self, instance):
        self.session.delete(instance)
        self.session.commit()
        return instance

    def deleteById(self, id):
        instance = self.session.get(id=id)
        self.session.delete(instance)
        self.session.commit()
        return instance
