enum LayoutSize { small, medium, large }

extension LayoutSizeX on LayoutSize {
  int get noOfColumns {
    switch (this) {
      case LayoutSize.small:
        return 1;
      case LayoutSize.medium:
        return 3;
      case LayoutSize.large:
        return 5;
    }
  }
}
