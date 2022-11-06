import 'dart:math';

import 'package:flutter/material.dart';
import 'package:libreria_front/models/news.dart';

class NewsList extends StatelessWidget {
  final List<News> news;
  final int listSize;
  const NewsList({required this.news, required this.listSize, super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 16),
          child: Align(
            alignment: Alignment.centerLeft,
            child: Text(
              "Novedades",
              style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
            ),
          ),
        ),
        const SizedBox(
          height: 20,
        ),
        Container(
          decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(20),
              color: const Color.fromARGB(255, 65, 65, 65)),
          margin: const EdgeInsets.symmetric(horizontal: 40),
          padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
          child: Column(
            children: news
                .take(3)
                .toList()
                .map((e) => Card(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                      child: Padding(
                        padding:
                            const EdgeInsets.fromLTRB(16.0, 8.0, 16.0, 8.0),
                        child: Row(children: [
                          Container(
                            width: 100,
                            height: 100,
                            decoration: BoxDecoration(
                              image: DecorationImage(
                                image: NetworkImage(e.image),
                                fit: BoxFit.fill,
                                alignment: Alignment.center,
                              ),
                              borderRadius: const BorderRadius.all(
                                Radius.circular(20),
                              ),
                            ),
                          ),
                          Flexible(
                            child: ListTile(
                              title: Text(e.title),
                              subtitle: Text(e.description),
                            ),
                          ),
                        ]),
                      ),
                    ))
                .toList(),
          ),
        ),
      ],
    );
  }
}
