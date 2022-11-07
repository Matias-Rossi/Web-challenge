from libreria.backend.bussiness.shop.category import Category

class Product:
    def __init__(self, name: str, autor:str, editorial: str, collection: str, pages: int,  price: float, description: str, category: Category, stock: int, thumbnail: str, images: list[str]):
        self.id = None #TODO: gestionar IDs de esta y mas clases
        self.name = name
        self.price = price
        self.description = description
        self.category = category
        self.stock = stock
        self.thumbnail = thumbnail


class Book(Product):
    def __init__(self, name: str, autor:str, editorial: str, collection: str, pages: int,  price: float, description: str, category: Category, stock: int, thumbnail: str, images: list[str]):
        super().__init__(name, autor, editorial, collection, pages, price, description, category, stock, thumbnail)
        self.autor = autor
        self.editorial = editorial
        self.collection = collection
        self.pages = pages
