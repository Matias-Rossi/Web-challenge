import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

class BannerGrid extends StatelessWidget {
  const BannerGrid({super.key});

  @override
  Widget build(BuildContext context) {
    return StaggeredGrid.count(
      crossAxisCount: 5,
      mainAxisSpacing: 10,
      crossAxisSpacing: 10,
      children: [
        const StaggeredGridTile.count(
            crossAxisCellCount: 3,
            mainAxisCellCount: 2,
            child: SizedBox(
              height: 100,
              width: 100,
              child: BannerMainItem(
                  image:
                      "https://i.kym-cdn.com/editorials/icons/original/000/004/844/wise_mystical_tree_lore.jpg",
                  title: "¡Últimos restantes!",
                  text: "¡No te quedes sin tu ejemplar!",
                  buttonText: "Comprar",
                  buttonRoute: "/"),
            )),
        const BannerSmallItem(
          image:
              "https://media.tenor.com/W7zm-VmO-ncAAAAd/wenomechainsama-tumajarbisaun.gif",
          title: "Wenamechoinasama",
          description: "Tumajarbisaun",
          clickRoute: "/",
        ),
        const BannerSmallItem(
          image:
              "https://media.tenor.com/W7zm-VmO-ncAAAAd/wenomechainsama-tumajarbisaun.gif",
          title: "Wenamechoinasama",
          description: "Tumajarbisaun",
          clickRoute: "/",
        ),
        const BannerSmallItem(
          image:
              "https://media.tenor.com/W7zm-VmO-ncAAAAd/wenomechainsama-tumajarbisaun.gif",
          title: "Wenamechoinasama",
          description: "Tumajarbisaun",
          clickRoute: "/",
        ),
        const BannerSmallItem(
          image:
              "https://media.tenor.com/W7zm-VmO-ncAAAAd/wenomechainsama-tumajarbisaun.gif",
          title: "Wenamechoinasama",
          description: "Tumajarbisaun",
          clickRoute: "/",
        ),
      ],
    );
  }
}

class BannerMainItem extends StatelessWidget {
  final String image;
  final String title;
  final String text;
  final String buttonRoute;
  final String buttonText;

  const BannerMainItem({
    required this.image,
    required this.title,
    required this.text,
    required this.buttonRoute,
    required this.buttonText,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          image: NetworkImage(image),
          fit: BoxFit.cover,
        ),
      ),
      child: SizedBox(
        width: MediaQuery.of(context).size.width * 0.3,
        child: Container(
          margin: const EdgeInsets.fromLTRB(0, 500, 500, 16.0),
          padding: const EdgeInsets.all(16.0),
          decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.secondary,
              borderRadius: const BorderRadius.only(
                  topRight: Radius.circular(20),
                  bottomRight: Radius.circular(20))),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Flexible(
                  child: Text(title,
                      style: const TextStyle(
                          color: Color.fromARGB(255, 255, 174, 0),
                          fontSize: 20,
                          fontWeight: FontWeight.bold))),
              Flexible(
                  child: Text(text,
                      style:
                          const TextStyle(color: Colors.white, fontSize: 15))),
              Align(
                alignment: Alignment.centerRight,
                child: Container(
                  margin: const EdgeInsets.only(right: 10.0),
                  child: TextButton(
                    onPressed: () => {/*TODO Pendiente*/},
                    child: const Text("Comprar",
                        style: TextStyle(
                          fontSize: 15,
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        )),
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

class BannerSmallItem extends StatelessWidget {
  final String image;
  final String title;
  final String description;
  final String clickRoute;

  const BannerSmallItem({
    required this.image,
    required this.title,
    required this.description,
    required this.clickRoute,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return StaggeredGridTile.count(
      crossAxisCellCount: 1,
      mainAxisCellCount: 1,
      //width: MediaQuery.of(context).size.width * 0.3,
      //height: MediaQuery.of(context).size.height * 0.4,
      child: InkWell(
        hoverColor: null,
        onTap: () => {Navigator.of(context).pushReplacementNamed(clickRoute)},
        child: Container(
          decoration: const BoxDecoration(color: Colors.white),
          child: Stack(children: [
            Image.network(image),
            Align(
              alignment: Alignment.bottomCenter,
              child: Container(
                padding:
                    const EdgeInsets.symmetric(vertical: 7.5, horizontal: 10.0),
                width: double.infinity,
                height: 60,
                decoration: BoxDecoration(
                    color: Theme.of(context).colorScheme.secondary),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    //TODO Agregar color llamativo al titulo
                    Text(title,
                        maxLines: 2,
                        style: const TextStyle(
                            fontSize: 20,
                            color: Color.fromARGB(255, 255, 174, 0))),
                    Text(description,
                        maxLines: 2,
                        style: const TextStyle(
                          fontSize: 15,
                          color: Colors.white,
                        )),
                  ],
                ),
              ),
            )
          ]),
        ),
      ),
    );
  }
}
