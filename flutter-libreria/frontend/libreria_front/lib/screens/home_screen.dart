import 'package:adaptive_navbar/adaptive_navbar.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:libreria_front/models/news.dart';
import 'package:libreria_front/providers/news_provider.dart';
import 'package:libreria_front/widgets/navbar.dart';

import 'package:libreria_front/widgets/banner_grid.dart';
import 'package:libreria_front/widgets/news_list.dart';
import 'package:provider/provider.dart';

import '../providers/book_categories.dart';
import '../widgets/categories_list.dart';

class HomeScreen extends StatefulWidget {
  static const routeName = "/home";
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isWide = screenWidth > 768;
    return Scaffold(
      appBar: isWide ? const NavBar(true) : null,
      bottomNavigationBar: isWide ? null : NavBar(isWide),
      backgroundColor: Color.fromARGB(255, 39, 39, 39),
      body: SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.fromLTRB(128.0, 30.0, 128.0, 0),
          decoration: const BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(20), topRight: Radius.circular(20))),
          child: Padding(
            padding: const EdgeInsets.only(left: 20.0, right: 20.0, top: 20),
            child: Column(children: [
              BannerGrid(),
              const Divider(indent: 50.0),
              CategoriesList(
                  categories: Provider.of<BookCategories>(context).categories),
              const Divider(indent: 50.0),
              NewsList(
                  news: Provider.of<NewsProvider>(context).news, listSize: 3),
              SizedBox(
                  height: isWide
                      ? MediaQuery.of(context).size.height * 0.6
                      : MediaQuery.of(context).size.height * 1,
                  child: GridView.count(crossAxisCount: 3)),
            ]),
          ),
        ),
      ),
    );
  }
}
