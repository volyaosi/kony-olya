import ModelSearchPanel from './model-search-panel.js';
import ViewSearchPanel from './view-search-panel.js';

export default class ControllerSearchPanel{
    constructor({ subscribe, notify }){
        this.model = new ModelSearchPanel();
        this.view = new ViewSearchPanel(this.onSort, this.onFilter, this.onSearch);

        this.notify = notify;
        subscribe('PRODUCTS_LOADED', this.onLoad);
    }

    onLoad = prods => {
        this.model.products = prods;
    }

    onSort = e => {
        const prodSorted = this.model.sort(e.target.value);
        this.notify('PRODUCT_MODIFIED_VIEW', prodSorted);
    }

    onFilter = () => {
        const selected = [...document.querySelectorAll('.form-check-input:checked')].map(el => el.value);
        const prodFiltered = this.model.filter(selected);
        this.notify('PRODUCT_MODIFIED_VIEW', prodFiltered);
    }

    onSearch = e => {
        const prodFound = this.model.search(e.target.value);
        this.notify('PRODUCT_MODIFIED_VIEW', prodFound);
    }
}