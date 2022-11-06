import 'package:flutter/material.dart';
import 'package:libreria_front/widgets/navbar.dart';
import 'package:libreria_front/widgets/search_menu.dart';

class SearchScreen extends StatelessWidget {
  static const String routeName = '/search';
  const SearchScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isWide = screenWidth > 768;
    return Scaffold(
      appBar: isWide ? const NavBar(true) : null,
      bottomNavigationBar: isWide ? null : NavBar(isWide),
      backgroundColor: const Color.fromARGB(255, 39, 39, 39),
      body: SingleChildScrollView(
        physics: PageScrollPhysics(),
        child: Container(
          margin: const EdgeInsets.fromLTRB(128.0, 30.0, 128.0, 0),
          decoration: const BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(20), topRight: Radius.circular(20))),
          child: Padding(
            padding: const EdgeInsets.only(left: 20.0, right: 20.0, top: 20),
            child: Column(
              children: [
                //Cosas
                SearchMenu(),
                SizedBox(
                    height: isWide
                        ? MediaQuery.of(context).size.height * 0.6
                        : MediaQuery.of(context).size.height * 1,
                    child: GridView.count(crossAxisCount: 3)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
