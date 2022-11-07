import 'package:flutter/widgets.dart';
import 'package:libreria_front/models/news.dart';

class NewsProvider with ChangeNotifier {
  final List<News> _news = [
    News(
      id: '1',
      title: "Sus avistado en biblioteca",
      description:
          "Un amogus ha sido visto en la biblioteca el día de hoy, se esperan los informes forenses",
      summary:
          "Un amogus ha sido visto en la biblioteca el día de hoy, se esperan los informes forenses",
      image: "https://media.tenor.com/gQV5VzHLWQIAAAAC/among-us-sus.gif",
    ),
    News(
      id: '2',
      title: "Sus avistado en biblioteca",
      description:
          "Un amogus ha sido visto en la biblioteca el día de hoy, se esperan los informes forenses",
      summary:
          "Un amogus ha sido visto en la biblioteca el día de hoy, se esperan los informes forenses",
      image: "https://media.tenor.com/gQV5VzHLWQIAAAAC/among-us-sus.gif",
    ),
    News(
      id: '3',
      title: "Sus avistado en biblioteca",
      description:
          "Un amogus ha sido visto en la biblioteca el día de hoy, se esperan los informes forenses",
      summary:
          "Un amogus ha sido visto en la biblioteca el día de hoy, se esperan los informes forenses",
      image: "https://media.tenor.com/gQV5VzHLWQIAAAAC/among-us-sus.gif",
    ),
  ];

  get news => _news;
}
