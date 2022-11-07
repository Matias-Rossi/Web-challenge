import 'package:flutter/material.dart';
import 'package:flutter_image_slideshow/flutter_image_slideshow.dart';
import 'package:libreria_front/models/product.dart';
import 'package:libreria_front/providers/products.dart';
import 'package:provider/provider.dart';

class ProductDetail extends StatelessWidget {
  final String productId;
  const ProductDetail(this.productId, {super.key});

  @override
  Widget build(BuildContext context) {
    final Product product = Provider.of<Products>(context).findById(productId);
    return Container(
      height: 600,
      child: Row(
        children: [
          ImageSlideshow(
            width: 500,
            height: 600,
            children: product.images
                .map<Widget>((e) => Image.network(
                      e,
                      fit: BoxFit.fitHeight,
                    ))
                .toList(),
          ),
          const VerticalDivider(),
          SizedBox(
            height: 600,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.start,
              //mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  product.name,
                  style: Theme.of(context).textTheme.headline3,
                ),
                Divider(),
                Flexible(
                  child: Text(
                    product.description,
                    maxLines: 10,
                    overflow: TextOverflow.clip,
                  ),
                ),
                Text(
                  '\$${product.price.toString()}',
                  style: TextStyle(fontSize: 21),
                ),
                ElevatedButton(
                  onPressed: () {
                    //TODO Implementar añadir al carrito
                  },
                  child: const Text('Añadir al carrito'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
