import ModelSearchPanel from "./model-search-panel.js";
import ViewSearchPanel from "./view-search-panel.js";

export default class ControllerSearchPanel {
  constructor({ subscribe, events, notify }) {
    this.model = new ModelSearchPanel();
    this.view = new ViewSearchPanel(this.onSort, this.onFilter, this.onSearch);

    this.notify = notify;
    this.events = events;
    subscribe(events.PRODUCTS_LOADED, this.onLoad);
  }

  onLoad = (prods) => {
    this.model.products = prods;
  };

  onSort = (e) => {
    const prodSorted = this.model.sort(e.target.value);
    this.notify(this.events.PRODUCT_SORT, prodSorted);
  };

  onFilter = () => {
    const selected = [
      ...document.querySelectorAll(".form-check-input:checked"),
    ].map((el) => el.value);
    const prodFiltered = this.model.filter(selected);
    this.notify(this.events.PRODUCT_SEARCH, prodFiltered);
  };

  onSearch = (e) => {
    const prodFound = this.model.search(e.target.value);
    this.notify(this.events.PRODUCT_FILTER, prodFound);
  };
}
