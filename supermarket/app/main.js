import ControllerProducts from './components/products/controller-products.js';
import ControllerProdDetails from './components/prod-details/controller-prod-details.js';
import ControllerSearchPanel from './components/search-panel/controller-search-panel.js';
import ControllerCart from './components/cart/controller-cart.js';
import ControllerOrder from './components/order/controller-order.js';
import ControllerOrderList from './components/order-list/controller-order-list.js';
import ControllerBot from './components/bot/controller-bot.js';
import Publisher from './helpers/publisher.js';

const publisher = new Publisher();
const products = new ControllerProducts(publisher.methods);
const prodDetails = new ControllerProdDetails(publisher.methods);
const searchPanel = new ControllerSearchPanel(publisher.methods);
const cart = new ControllerCart(publisher.methods);
const order = new ControllerOrder(publisher.methods);
const orderList = new ControllerOrderList();
const bot = new ControllerBot(publisher.methods);