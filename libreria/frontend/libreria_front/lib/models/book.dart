import 'package:libreria_front/models/product.dart';

class Book extends Product {
  final List<String> autores;
  final String editorial;
  final List<String> collections;
  final int pages;

  Book({
    required this.autores,
    required this.editorial,
    required this.collections,
    required this.pages,
    required id,
    required name,
    required description,
    required image,
    required price,
  }) : super(
          description: description,
          id: id,
          image: image,
          name: name,
          price: price,
        );
}
