import 'package:flutter/material.dart';
import 'package:libreria_front/screens/home_screen.dart';
import 'package:libreria_front/widgets/navbar.dart';

import 'package:libreria_front/widgets/product_detail.dart';

class ProductScreen extends StatefulWidget {
  static const routeName = "/product";
  final String productId;
  const ProductScreen(this.productId, {super.key});

  @override
  State<ProductScreen> createState() => _ProductScreenState();
}

class _ProductScreenState extends State<ProductScreen> {
  @override
  Widget build(BuildContext context) {
    final productId = widget.productId;
    final screenWidth = MediaQuery.of(context).size.width;
    final isWide = screenWidth > 768;
    return Scaffold(
      appBar: isWide ? const NavBar(true) : null,
      bottomNavigationBar: isWide ? null : NavBar(isWide),
      backgroundColor: const Color.fromARGB(255, 39, 39, 39),
      body: SingleChildScrollView(
        child: Container(
          margin: const EdgeInsets.fromLTRB(128.0, 30.0, 128.0, 0),
          decoration: const BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(20), topRight: Radius.circular(20))),
          child: Padding(
            padding: const EdgeInsets.only(left: 20.0, right: 20.0, top: 20),
            child: Column(children: [
              //Cosas
              ProductContainer(productId),
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

class ProductContainer extends StatelessWidget {
  final String? productId;
  const ProductContainer(this.productId, {super.key});

  @override
  Widget build(BuildContext context) {
    if (productId == null || productId == "invalid") {
      return Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            const Text("Producto no encontrado"),
            ElevatedButton(
              onPressed: (() => Navigator.of(context)
                  .pushReplacementNamed(HomeScreen.routeName)),
              child: const Text('Volver a inicio'),
            )
          ],
        ),
      );
    } else {
      return ProductDetail(productId!);
    }
  }
}
