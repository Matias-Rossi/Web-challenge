class Product {
  final String id;
  final String name;
  final String description;
  final String thumbnail;
  final double price;
  final List<String> images;

  Product({
    required this.id,
    required this.name,
    required this.description,
    required this.thumbnail,
    required this.price,
    required this.images,
  });
}
