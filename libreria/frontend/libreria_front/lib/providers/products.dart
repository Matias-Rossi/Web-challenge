import 'package:flutter/widgets.dart';
import 'package:libreria_front/models/book.dart';
import 'package:libreria_front/models/product.dart';

class Products with ChangeNotifier {
  final List<Product> _products = [
    Book(
      id: "0",
      name: "Luna de Plutón",
      autores: ["Angel David Revilla"],
      description:
          "En un lejano parque de atracciones y en plena misión secreta para defender a su amada luna de un peligroso emperador, la joven Claudia, hija de Metallus, conoce a Knaach, y juntos se embarcan en una odisea de sucesos desafortunados que desatarán una verdadera guerra galáctica. La misión de Claudia se ve amenazada y su padre resulta preso, cuando ella queda envuelta equívocamente en un asesinato. En esta épica de intrigas y rencores ancestrales, ogros y elfos deberán pelear en contra de un mismo y casi todopoderoso enemigo. Con su filosa ironía y sublime astucia, Dross nos transporta a un universo vasto y maravilloso, nos obsequia una novela clásica de la más pura ciencia ficción y nos sumerge en una tremenda batalla cósmica, con la elegancia de quien todo lo ha visto y nada teme.",
      editorial: "Espasa Infantil",
      collections: ["Narrativa juvenil", "Espasa Juvenil"],
      pages: 472,
      thumbnail:
          "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/207/m_libros/portada_luna-de-pluton_dross_201509301040.jpg",
      images: [
        "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/207/m_libros/portada_luna-de-pluton_dross_201509301040.jpg"
      ],
      price: 2499.0,
    ),
    Book(
      id: "0",
      name: "Luna de Plutón",
      autores: ["Angel David Revilla"],
      description:
          "En un lejano parque de atracciones y en plena misión secreta para defender a su amada luna de un peligroso emperador, la joven Claudia, hija de Metallus, conoce a Knaach, y juntos se embarcan en una odisea de sucesos desafortunados que desatarán una verdadera guerra galáctica. La misión de Claudia se ve amenazada y su padre resulta preso, cuando ella queda envuelta equívocamente en un asesinato. En esta épica de intrigas y rencores ancestrales, ogros y elfos deberán pelear en contra de un mismo y casi todopoderoso enemigo. Con su filosa ironía y sublime astucia, Dross nos transporta a un universo vasto y maravilloso, nos obsequia una novela clásica de la más pura ciencia ficción y nos sumerge en una tremenda batalla cósmica, con la elegancia de quien todo lo ha visto y nada teme.",
      editorial: "Espasa Infantil",
      collections: ["Narrativa juvenil", "Espasa Juvenil"],
      pages: 472,
      thumbnail:
          "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/207/m_libros/portada_luna-de-pluton_dross_201509301040.jpg",
      images: [
        "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/207/m_libros/portada_luna-de-pluton_dross_201509301040.jpg"
      ],
      price: 2499.0,
    ),
    Book(
      id: "0",
      name: "Luna de Plutón",
      autores: ["Angel David Revilla"],
      description:
          "En un lejano parque de atracciones y en plena misión secreta para defender a su amada luna de un peligroso emperador, la joven Claudia, hija de Metallus, conoce a Knaach, y juntos se embarcan en una odisea de sucesos desafortunados que desatarán una verdadera guerra galáctica. La misión de Claudia se ve amenazada y su padre resulta preso, cuando ella queda envuelta equívocamente en un asesinato. En esta épica de intrigas y rencores ancestrales, ogros y elfos deberán pelear en contra de un mismo y casi todopoderoso enemigo. Con su filosa ironía y sublime astucia, Dross nos transporta a un universo vasto y maravilloso, nos obsequia una novela clásica de la más pura ciencia ficción y nos sumerge en una tremenda batalla cósmica, con la elegancia de quien todo lo ha visto y nada teme.",
      editorial: "Espasa Infantil",
      collections: ["Narrativa juvenil", "Espasa Juvenil"],
      pages: 472,
      thumbnail:
          "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/207/m_libros/portada_luna-de-pluton_dross_201509301040.jpg",
      images: [
        "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/207/m_libros/portada_luna-de-pluton_dross_201509301040.jpg"
      ],
      price: 2499.0,
    ),
    Product(
      id: "1",
      name: "Póster Die Toten Hosen",
      description:
          "Rememora el especial evento de la banda alemana Die Toten Hosen",
      thumbnail:
          "https://d3ln5tnomrezbf.cloudfront.net/Resources/Repository/Images/Shop/60075/60075.det.1.zoom.jpg",
      images: [
        "https://d3ln5tnomrezbf.cloudfront.net/Resources/Repository/Images/Shop/60075/60075.det.1.zoom.jpg"
      ],
      price: 1999.0,
    ),
    Product(
      id: "2",
      name: "😎😏",
      description: "Wenomechainsama Tumajarbisaun Wifenlooof Eselifterbraun",
      thumbnail:
          "https://pbs.twimg.com/media/FdOsbE3akAIyxH8?format=jpg&name=small",
      images: [
        "https://pbs.twimg.com/media/FdOsbE3akAIyxH8?format=jpg&name=small"
      ],
      price: 999.0,
    )
  ];

  get books {
    return _products.whereType<Book>().toList();
  }

  findById(String productId) {
    return _products.firstWhere((product) => product.id == productId);
  }
}
