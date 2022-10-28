import 'package:flutter/widgets.dart';

import 'package:libreria_front/models/book_category.dart';

class BookCategories with ChangeNotifier {
  static final List<BookCategory> _categories = [
    BookCategory(
        id: "0",
        name: 'Fantasy',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'Fantasy description'),
    BookCategory(
        id: "1",
        name: 'Sci-Fi',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'Sci-Fi description'),
    BookCategory(
        id: "2",
        name: 'Horror',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'Horror description'),
    BookCategory(
        id: "3",
        name: 'Romance',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'Romance description'),
    BookCategory(
        id: "4",
        name: 'Mystery',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'Mystery description'),
    BookCategory(
        id: "5",
        name: 'Thriller',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'Thriller description'),
    BookCategory(
        id: "6",
        name: 'Drama',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'Drama description'),
    BookCategory(
        id: "7",
        name: 'Comedy',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'Comedy description'),
    BookCategory(
        id: "8",
        name: 'Action',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'Action description'),
    BookCategory(
        id: "9",
        name: 'Adventure',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'Adventure description'),
    BookCategory(
        id: "10",
        name: 'History',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'History description'),
    BookCategory(
        id: "11",
        name: 'Biography',
        image: 'https://ichef.bbci.co.uk/images/ic/480xn/p09w4l2r.jpg',
        description: 'Biography description'),
  ];

  get categories {
    return _categories;
  }
}
