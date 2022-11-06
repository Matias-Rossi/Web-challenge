import 'package:flutter/material.dart';
import 'package:libreria_front/models/book.dart';
import 'package:libreria_front/models/product.dart';
import 'package:libreria_front/providers/products.dart';
import 'package:libreria_front/screens/product_screen.dart';
import 'package:libreria_front/utils/constants.dart';
import 'package:libreria_front/utils/layout_size.dart';
import 'package:libreria_front/utils/router.dart';
import 'package:provider/provider.dart';
import 'dart:html';

import '../screens/home_screen.dart';

class SearchMenu extends StatelessWidget {
  const SearchMenu({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Row(
      children: [
        SearchFilters(),
        VerticalDivider(),
        SearchResults(books: Provider.of<Products>(context).books),
      ],
    ));
  }
}

/* FILTROS */

class SearchFilters extends StatefulWidget {
  const SearchFilters({super.key});

  @override
  State<SearchFilters> createState() => _SearchFiltersState();
}

class _SearchFiltersState extends State<SearchFilters> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Filtros'),
        Text('Categorías'),
        Text('Precio'),
        Text('Autor'),
        Text('Editorial'),
        Text('Año'),
        Text('Idioma'),
        Text('Formato'),
        Text('Puntuación'),
      ],
    );
  }
}

/* RESULTADOS */
class SearchResults extends StatefulWidget {
  final List<Book> books;
  const SearchResults({required this.books, super.key});

  @override
  State<SearchResults> createState() => _SearchResultsState();
}

class _SearchResultsState extends State<SearchResults> {
  @override
  Widget build(BuildContext context) {
    print("Cantidad de elementos: ${widget.books.length}");
    return Expanded(
      child: GridView.builder(
        physics: PageScrollPhysics(),
        //https://stackoverflow.com/questions/62990077/flutter-gridview-inside-listview-issue
        shrinkWrap: true,
        itemCount: widget.books.length,
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: columnCount(context),
          crossAxisSpacing: 5.0,
        ),
        itemBuilder: ((context, index) => BookTile(widget.books[index])),
      ),
    );
  }

  int columnCount(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    if (screenWidth <= Breakpoints.small) {
      return LayoutSize.small.noOfColumns;
    }
    if (screenWidth <= Breakpoints.medium) {
      return LayoutSize.medium.noOfColumns;
    } else {
      //screenWidth <= Breakpoints.large
      return LayoutSize.large.noOfColumns;
    }
  }
}

class BookTile extends StatelessWidget {
  final Book book;

  const BookTile(this.book, {super.key});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        FRouter.router
            .navigateTo(context, '${ProductScreen.routeName}?id=${book.id}');
      },
      child: SizedBox(
        height: 200,
        width: 200,
        child: Container(
          color: Colors.black12,
          child: Stack(
            children: <Widget>[
              Positioned.fill(
                child: Image.network(
                  book.thumbnail,
                  fit: BoxFit.fitHeight,
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
                      "${book.name} - ${book.autores.join(', ')}",
                      style: const TextStyle(color: Colors.white),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
