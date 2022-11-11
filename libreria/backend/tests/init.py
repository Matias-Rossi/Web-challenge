from sqlalchemy.orm import Session

from ..project.bussiness.shop.author import Author
from ..project.bussiness.shop.product import Product, Book


if __name__ == '__main__':
    session = Session()
    create_sample_products(session)


def create_sample_products(session: Session):
    jrr = Author(name="J.R.R. Tolkien")
    lotr = Book(
        name="The Lord of the Rings",
        price=100,
        promo_price=50,
        description="The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
        category=1,
        stock=100,
        thumbnail="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        authors=[jrr],
        collection="The Lord of the Rings",
        editorial="Allen & Unwin",
        pages=1216,
        active=True,
    )
    session.add(lotr) #TODO Usar repo
    session.add(lotr)
    session.add(lotr)
    dth = Product(
        name="Die Toten Hosen Poster",
        price=10,
        promo_price=None,
        description="Poster of the German punk rock band Die Toten Hosen",
        category=2,
        stock=100,
        thumbnail="https://d3ln5tnomrezbf.cloudfront.net/Resources/Repository/Images/Shop/60075/60075.det.1.zoom.jpg",
        active=True,
    )
    session.add(dth)