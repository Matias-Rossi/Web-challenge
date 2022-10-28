import 'dart:io';

import 'package:flutter/material.dart';
import 'package:libreria_front/providers/book_categories.dart';
import 'package:libreria_front/screens/home_screen.dart';
import 'package:libreria_front/widgets/navbar.dart';
import 'package:provider/provider.dart';

import 'providers/products.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (ctx) => Products()),
        ChangeNotifierProvider(create: (ctx) => BookCategories()),
      ],
      child: MaterialApp(
        title: 'La Librería',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: const HomeScreen(),
        routes: {
          HomeScreen.routeName: (ctx) => const HomeScreen(),
        },
      ),
    );
  }
}
