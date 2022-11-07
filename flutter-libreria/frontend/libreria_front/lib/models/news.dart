class News {
  final String id;
  final String title;
  final String description;
  final String summary;
  final String image;

  News({
    required this.id,
    required this.title,
    required this.description,
    required this.summary,
    required this.image,
  });

  factory News.fromJson(Map<String, dynamic> json) {
    return News(
      id: json['id'],
      title: json['title'],
      description: json['description'],
      summary: json['summary'],
      image: json['image'],
    );
  }
}
