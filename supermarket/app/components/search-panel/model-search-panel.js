export default class ModelProducts {
  products = [];

  sort = (type) => {
    const sortMethod = {
      "price-increase": (a, b) => b.price - a.price,
      "price-decrease": (a, b) => a.price - b.price,
    };

    this.products.sort(sortMethod[type]);
    return this.products;
  };

  search = (userInput) => {
    const userInputLower = userInput.toLowerCase().trim();
    return this.products.filter(({ product }) =>
      product.toLowerCase().includes(userInputLower)
    );
  };

  filter = (selected) => {
    if (selected.includes("All")) {
      return this.products;
    }
    return this.products.filter(({ category }) =>
      selected.some((el) => category === el)
    );
  };
}
