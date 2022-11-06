import 'package:adaptive_navbar/adaptive_navbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:libreria_front/screens/home_screen.dart';
import 'package:libreria_front/utils/router.dart';

class NavBar extends StatefulWidget with PreferredSizeWidget {
  final bool isWide;

  const NavBar(this.isWide, {super.key});

  @override
  State<NavBar> createState() => _NavBarState();

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}

class _NavBarState extends State<NavBar> {
  MouseCursorManager mouseCursorManager =
      MouseCursorManager(SystemMouseCursors.basic);
  @override
  Widget build(BuildContext context) {
    return widget.isWide
        ? AdaptiveNavBar(
            onTitleTapped: () => Navigator.of(context)
                .pushReplacementNamed(HomeScreen.routeName),
            navBarItems: [
              NavBarItem(
                text: "Inicio",
                onTap: () {
                  //Navigator.of(context).pushReplacementNamed("/");
                  FRouter.router.navigateTo(context, "/home");
                },
              ),
              NavBarItem(
                text: "Buscar",
                onTap: () {
                  //Navigator.of(context).pushReplacementNamed("/search");
                  FRouter.router.navigateTo(context, "/search");
                },
              ),
              NavBarItem(
                text: "Ubicaciones",
              ),
              NavBarItem(
                text: "Contacto",
              ),
            ],
            title: Text("La Librería"),
            screenWidth: MediaQuery.of(context).size.width,
          )
        : BottomNavigationBar(items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'Inicio',
            ),
            BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Buscar'),
            BottomNavigationBarItem(
                icon: Icon(Icons.location_on), label: 'Ubicaciones'),
            BottomNavigationBarItem(
                icon: Icon(Icons.person), label: 'Contacto'),
          ]);
  }
}
