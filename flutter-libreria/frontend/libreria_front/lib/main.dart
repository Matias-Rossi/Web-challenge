import 'dart:io';

import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart';
import 'package:libreria_front/providers/book_categories.dart';
import 'package:libreria_front/providers/news_provider.dart';
import 'package:libreria_front/screens/home_screen.dart';
import 'package:libreria_front/screens/notFound_screen.dart';
import 'package:libreria_front/screens/product_screen.dart';
import 'package:libreria_front/screens/search_screen.dart';
import 'package:libreria_front/utils/router.dart';
import 'package:libreria_front/widgets/navbar.dart';
import 'package:provider/provider.dart';
import 'package:url_strategy/url_strategy.dart';

import 'providers/products.dart';

void main() {
  setPathUrlStrategy();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    FluroRouter router = FluroRouter();

    router.notFoundHandler = Handler(
        handlerFunc: (BuildContext? context, Map<String, dynamic> params) {
      return const NotFoundScreen();
    });
    Routes.configureRoutes(router);
    FRouter.router = router;
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (ctx) => Products()),
        ChangeNotifierProvider(create: (ctx) => BookCategories()),
        ChangeNotifierProvider(create: (ctx) => NewsProvider()),
      ],
      child: MaterialApp(
        title: 'La Librería',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: const HomeScreen(),
        onGenerateRoute: FRouter.router.generator,
      ),
    );
  }
}
