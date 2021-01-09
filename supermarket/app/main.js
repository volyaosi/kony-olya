
import ControllerProducts from './components/products/controller-products.js';
import ControllerSearchPanel from './components/search-panel/controller-search-panel.js';
import Publisher from './helpers/publisher.js';

const publisher = new Publisher();
const products = new ControllerProducts(publisher);
const searchPanel = new ControllerSearchPanel(publisher);