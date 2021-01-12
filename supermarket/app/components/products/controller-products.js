import ModelProducts from "./model-products.js";
import ViewProducts from "./view-products.js";

export default class ControllerProducts {
  constructor({ notify, subscribe, events }) {
    this.model = new ModelProducts();
    this.view = new ViewProducts(this.onShowDetails, this.onAdd);

    this.init();

    this.notify = notify;
    this.events = events;
    subscribe(events.PRODUCT_SORT, this.onSort);
    subscribe(events.PRODUCT_SEARCH, this.onSearch);
    subscribe(events.PRODUCT_FILTER, this.onFilter);
  }

  init = async function () {
    let products = await this.model.loadProducts();
    this.notify(this.events.PRODUCTS_LOADED, products);
    this.view.render(products);
  };

  onSort = (prods) => this.view.render(prods);

  onSearch = (prods) => {
    this.view.render(prods);
  };
  onFilter = (prods) => {
    this.view.render(prods);
  };

  onShowDetails = (e) => {
    const product = this.model.getProdById(e.target.dataset.detailsId);
    this.notify(this.events.SHOW_PROD_DETAILS, product);
  };

  onAdd = (e) => {
    const product = this.model.getProdById(e.target.dataset.detailsId);
    this.notify(this.events.ADD_PRODUCT, product);
  };
}