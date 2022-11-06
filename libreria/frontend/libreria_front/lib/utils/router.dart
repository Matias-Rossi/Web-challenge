import 'package:fluro/fluro.dart';
import 'package:libreria_front/screens/home_screen.dart';
import 'package:libreria_front/screens/product_screen.dart';
import 'package:libreria_front/screens/search_screen.dart';

class FRouter {
  static late final FluroRouter router;
}

var rootHandler = Handler(
  handlerFunc: (context, params) {
    return const HomeScreen();
  },
);

var searchHandler = Handler(
  handlerFunc: (context, params) {
    return const SearchScreen();
  },
);

var productDetailHandler = Handler(
  handlerFunc: (context, Map<String, List<String>> params) {
    String? id = params["id"]?.first ?? "invalid";
    return ProductScreen(id);
  },
);

class Routes {
  static String root = "/";
  static String home = "/home";
  static String search = "/search";
  static String productDetail = "/product";

  static void configureRoutes(FluroRouter router) {
    print('Configuring routes');
    router.define(
      root,
      transitionType: TransitionType.none,
      handler: rootHandler,
    );
    router.define(
      home,
      transitionType: TransitionType.none,
      handler: rootHandler,
    );
    router.define(
      search,
      transitionType: TransitionType.none,
      handler: searchHandler,
    );
    router.define(
      productDetail,
      transitionType: TransitionType.none,
      handler: productDetailHandler,
    );
  }
}
