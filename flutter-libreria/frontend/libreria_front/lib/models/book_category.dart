class BookCategory {
  final String id;
  final String name;
  final String description;
  final String image;

  BookCategory({
    required this.id,
    required this.name,
    required this.description,
    required this.image,
  });

  factory BookCategory.fromJson(Map<String, dynamic> json) {
    return BookCategory(
      id: json['id'],
      name: json['name'],
      description: json['description'],
      image: json['image'],
    );
  }
}
