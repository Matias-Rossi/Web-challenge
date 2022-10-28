import 'package:flutter/material.dart';
import 'package:libreria_front/models/book_category.dart';

class CategoriesList extends StatelessWidget {
  final List<BookCategory> categories;

  const CategoriesList({required this.categories, super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Padding(
          padding: EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 8.0),
          child: Align(
            alignment: Alignment.centerLeft,
            child: Text(
              'Categorias',
              style: TextStyle(
                fontSize: 30,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
        Container(
          height: 200,
          child: ListView(
            scrollDirection: Axis.horizontal,
            children: categories
                .map((element) => CategoryTile(bookCategory: element))
                .toList(),
          ),
        ),
      ],
    );
  }
}

class CategoryTile extends StatelessWidget {
  final BookCategory bookCategory;
  const CategoryTile({required this.bookCategory, super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 200,
      width: 200,
      child: Card(
        child: Stack(
          children: <Widget>[
            Positioned.fill(
              child: Image.network(
                bookCategory.image,
                fit: BoxFit.cover,
              ),
            ),
            Positioned(
              bottom: 0,
              left: 0,
              right: 0,
              child: Container(
                color: Colors.black45,
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    bookCategory.name,
                    style: const TextStyle(color: Colors.white),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
