import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/widgets.dart';

class CarouselItem extends StatelessWidget {
  final image;
  final route;
  final title;
  final text;
  const CarouselItem(
      {this.image, this.route, this.title, this.text, super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: MediaQuery.of(context).size.height * 0.5,
      width: MediaQuery.of(context).size.width * 0.8,
      child: Card(
        semanticContainer: true,
        elevation: 5.0,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                child: Image.network(image),
                constraints: BoxConstraints(
                  maxHeight: MediaQuery.of(context).size.height * 0.5,
                  maxWidth: MediaQuery.of(context).size.width * 0.4,
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(5.0, 0, 0, 5.0),
                child: Expanded(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      Text(title,
                          style: const TextStyle(
                              //color: Colors.white,
                              fontSize: 20.0,
                              fontWeight: FontWeight.bold)),
                      Text(text,
                          style: const TextStyle(
                              //color: Colors.white,
                              fontSize: 15.0,
                              fontWeight: FontWeight.normal))
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
