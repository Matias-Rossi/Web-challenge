import sqlalchemy as sa
from bussiness.persistence.base import Base, metadata_obj, engine
# from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import Session
from bussiness.shop.category import Category
from bussiness.shop.product import Product
from bussiness.persistence.repositories.categories_repository import CategoriesRepository
from bussiness.persistence.repositories.products_repository import ProductsRepository

import pymysql
pymysql.install_as_MySQLdb()

#create sqlalchemy engine iwht password and user 



def create_sample_data(session):
    # Instantiate repositories
    categories_repository = CategoriesRepository(session)
    products_repository = ProductsRepository(session)
    
    # Create categories
    salchichas = Category("Salchichas", "Salchichas")
    salsas_y_mas = Category("Salsas y más", "Salsas y más")

    # Create products
    combo_ahumado = Product("Combo ahumado", "Combo ahumado", 2697, "https://static.wixstatic.com/media/fb5415_bb9095e6f766419c96ea436d66ffdd68~mv2.jpg/v1/fill/w_225,h_299,al_c,q_80,usm_0.66_1.00_0.01/fb5415_bb9095e6f766419c96ea436d66ffdd68~mv2.webp", 2499, True, True, True, True, salchichas)
    thueringer_bratwuerste = Product("Thüringer Bratwürste", "Thüringer Bratwürste", 799, "https://static.wixstatic.com/media/fb5415_011a49bfd49140228391491bbb2e9d91~mv2.jpg/v1/fill/w_315,h_407,al_c,q_85,usm_0.66_1.00_0.01/fb5415_011a49bfd49140228391491bbb2e9d91~mv2.webp", None, False, False, True, True, salchichas)
    bayersiche_brezel = Product("Bayerische Brezel", "Bayerische Brezel", 300, "https://lh3.ggpht.com/p/AF1QipPuPXSVPjB5TEFzLkBnhps6u_D2hzioCmezVagD=s512", None, False, False, True, True, salsas_y_mas)
    leberkaese = Product("Leberkäse", "Leberkäse", 799, "https://static.wixstatic.com/media/fb5415_cf0868f362c54a048526203d8ac2e89f~mv2.jpg/v1/fill/w_225,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fb5415_cf0868f362c54a048526203d8ac2e89f~mv2.jpg", None, False, False, True, False, salchichas)
    sauerkraut = Product("Sauerkraut", "Sauerkraut", 650, "https://static.wixstatic.com/media/fb5415_f4317ff925ac4df39464c21a17d67e2c~mv2.jpg/v1/fill/w_225,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fb5415_f4317ff925ac4df39464c21a17d67e2c~mv2.jpg", None, False, False, True, False, salsas_y_mas)
    silberweizen = Product("Silberweizen - cerveza de trigo rubia artesanal", "Cerveza de trigo rubia artesanal", 900, "https://static.wixstatic.com/media/fb5415_5adeec749bca46509fdb4c39344ae3a0~mv2.jpg/v1/fill/w_225,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fb5415_5adeec749bca46509fdb4c39344ae3a0~mv2.jpg", None, False, False, True, False, salsas_y_mas)

    print('persistiendo')

    # Save stuff
    categories_repository.addAll([salchichas, salsas_y_mas])
    products_repository.addAll([combo_ahumado, thueringer_bratwuerste, bayersiche_brezel, leberkaese, sauerkraut, silberweizen])

""" def get_book_and_author():
    authors_repository = AuthorsRepository(session)
    books_repository = BooksRepository(session)
    book = books_repository.get(**{'id': 1})[0]
    authors = authors_repository.get_from_book_id(book.id)
    print("--------------------")
    print(book.__to_dict__())
    for author in authors:
        print(author.__to_dict__())
    print("--------------------") """
    

# Main

if '__main__' == __name__:

    Base.metadata.create_all(bind=engine)

    with Session(engine) as session:    
        create_sample_data(session)
        
        pass