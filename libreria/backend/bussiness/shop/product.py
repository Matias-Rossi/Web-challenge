from libreria.backend.bussiness.shop.category import Category

class Product:
    def __init__(self, name: str, autor:str, editorial: str, collection: str, pages: int,  price: float, description: str, category: Category, stock: int, image: str):
        self.id = None #TODO: gestionar IDs de esta y mas clases
        self.name = name
        self.price = price
        self.description = description
        self.category = category
        self.stock = stock
        self.image = image


class Book(Product):
    def __init__(self, name: str, autor:str, editorial: str, collection: str, pages: int,  price: float, description: str, category: Category, stock: int, image: str):
        super().__init__(name, autor, editorial, collection, pages, price, description, category, stock, image)
        self.autor = autor
        self.editorial = editorial
        self.collection = collection
        self.pages = pages
