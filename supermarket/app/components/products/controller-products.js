import ModelProducts from './model-products.js';
import ViewProducts from './view-products.js';

export default class ControllerProducts{
    constructor({ notify, subscribe }){
        this.model = new ModelProducts();
        this.view = new ViewProducts();
        
        this.init();
        
        this.notify = notify;
        subscribe('PRODUCT_VIEW_MODIFIED', this.onChange);
    }

    init = async function() {
        let products = await this.model.loadProducts();        
        this.notify('PRODUCTS_LOADED', products);
        this.view.render(products);
    }

    onChange = prodViewModified => {
        this.view.render(prodViewModified);
    }
}