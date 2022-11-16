import sqlalchemy as sa
# from sqlalchemy import create_engine, MetaData
from bussiness.persistence.base import Base, metadata_obj, engine
from sqlalchemy.orm import Session
from bussiness.shop.author import Author
from bussiness.shop.category import Category
from bussiness.shop.product import Product, Book
from bussiness.persistence.repositories.categories_repository import CategoriesRepository
from bussiness.persistence.repositories.products_repository import ProductsRepository
from bussiness.persistence.repositories.authors_repository import AuthorsRepository
from bussiness.persistence.repositories.books_repository import BooksRepository

import pymysql
pymysql.install_as_MySQLdb()

#create sqlalchemy engine iwht password and user 



def create_sample_data(session):
    # Instantiate repositories
    categories_repository = CategoriesRepository(session)
    products_repository = ProductsRepository(session)
    authors_repository = AuthorsRepository(session)
    books_repository = BooksRepository(session)

    # Create authors
    author1 = Author(name="Dross", biography="Ángel David Revilla Lenoci, más conocido como Dross Rotzank o simplemente Dross, es un youtuber, escritor y periodista venezolano nacionalizado argentino.", image="https://upload.wikimedia.org/wikipedia/commons/7/7c/%C3%81ngel_David_Revilla_2019.png")
    author2 = Author(name="El Rubius", biography="Rubén Doblas Gundersen, más conocido como Rubius, es un youtuber, actor, cantante, escritor y empresario español.", image="https://marketing4ecommerce.net/wp-content/uploads/2018/07/historia-elrubius.jpg")
    author3 = Author(name="Robert C. Martin", biography="Robert Cecil Martin (n. 1952, coloquialmente conocido como Uncle Bob) es un ingeniero de software y autor estadounidense, reconocido por desarrollar varios principios de diseño de software y ser uno de los coautores del Manifiesto Ágil. Martin es autor de varios artículos y libros. Fue el editor de la revista C++ Report y primer director de la Agile Alliance.", image="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/b82c35f5-a7cd-46c8-aff1-52b8d7a67cdc_400x400.png")
    author4 = Author("John Johnson", "Tipo muy capaz", "https://images.mubicdn.net/images/cast_member/9020/cache-148043-1465730065/image-w856.jpg")

    # Create categories
    category1 = Category(name="Profesionales", description="Libros de profesionales", thumbnail="https://cdn-blog1.fibrasynormasdecolombia.com/wp-content/uploads/2021/03/1600993945916-1-810x475.jpg")
    category2 = Category(name="Famosos", description="Libros realizados por personalidades populares", thumbnail="https://kinsta.com/es/wp-content/uploads/sites/8/2021/09/alternatives-to-youtube-1024x512.jpeg")
    category3 = Category("Horror", "Libros de terror", "https://img.blogs.es/anexom/wp-content/uploads/2022/03/teoria-bosque-oscuro.jpg")
    category4 = Category("Infantiles", "Libros para niños", "https://puntosdejuego.com/images/categorias/gran/parque%20infantil%20centro%20comercial%203.jpg")
    category5 = Category("Ciencia Ficción", "Libros de ciencia ficción", "https://estaticos.muyinteresante.es/uploads/images/gallery/5f4cef935cafe8950d390dfa/novelas-ciencia-ficcion_0.jpg")

    # Create books
    book1 = Book("Clean Code", [author3, author4], "Pearson", "Clean Code", 465, 1999, None, "Libro para gente que quiere aprender las mejores prácticas de programación", category1, 5, "https://images.cdn3.buscalibre.com/fit-in/360x360/10/fb/10fb170d7732b7dca25ebb81ded2572d.jpg", [], "04/09/2012", "3213213123", True)
    book2 = Book("Clean Architecture", [author3], "Pearson", "Clean Code", 520, 6999, None ,"Clean Architecture: A Craftsman's Guide to Software Structure and Design es un libro escrito por Robert C. Martin, publicado por Prentice Hall en 2017. El libro es una guía para el diseño de software limpio. El libro no es un manual de referencia, sino que es una guía para el desarrollo de software limpio.", category1, 9, "https://m.media-amazon.com/images/I/41-sN-mzwKL._AC_SY780_.jpg", [], "04/09/2013", "3216453123", True)
    book3 = Book("El libro troll", [author2], "Ediciones Martínez Roca", "Fuera de colección", 192, 1500, None, "Tu vida es un libro a medio construir, una aventura espontánea, un juego a veces provocador, pero siempre extraordinario. elrubius, un auténtico fenómeno de YouTube, está dispuesto a acompañarte en una experiencia que recoge tus momentos más gloriosos. Se llama EL LIBRO TROLL y es su última locura: un cuaderno de actividades, un libro interactivo, un álbum de recuerdos…", category2, 15, "https://www.planetadelibros.com.ar/usuaris/libros/fotos/120/m_libros/119705_el-libro-troll_9788499983196.jpg", [], "2014", "465456456465", True)
    book4 = Book("Luna de Plutón", [author1], "Temas de Hoy", "Fuera de colección", 472, 3700, None, "Luna de Plutón es una novela de ciencia ficción escrita por Dross Rotzank. La novela fue publicada en 2017 por Temas de Hoy. La novela es la primera parte de una trilogía, siendo las otras dos Luna de Plutón: El despertar y Luna de Plutón: El fin.", category4, 150, "https://planetadelibrosar6.cdnstatics.com/usuaris/libros/fotos/206/m_libros/portada_luna-de-pluton_dross_201508312146.jpg", [], "05/04/2015", "321321321", True)
    
    print('persistiendo')

    # Save stuff
    authors_repository.addAll([author1, author2, author3, author4])
    authors_repository.commit()
    categories_repository.addAll([category1, category2, category3, category4, category5])
    categories_repository.commit()
    books_repository.addAll([book1, book2, book3, book4])
    books_repository.commit()

# Main

if '__main__' == __name__:

    #string = "mysql+mysqlconnector://root:13082001@127.0.0.1:3306/wc_libreria"

    #engine = create_engine(string, echo=True, future=True)
    #metadata = MetaData(engine)
    metadata_obj.create_all()

    with Session(engine) as session:    
        create_sample_data(session)