import ViewCart from "./view-cart.js";
import ModelCart from "./model-cart.js";

export default class ControllerCart {
  constructor({ subscribe, events, notify }) {
    this.view = new ViewCart(
      this.onOpen,
      this.onAddOpen,
      this.onReduce,
      this.onDelete,
      this.onOrder
    );
    this.model = new ModelCart();

    subscribe(events.ADD_PRODUCT, this.onAdd);
    subscribe(events.COMPLETE_ORDER, this.onReset);
    this.notify = notify;
    this.events = events;
    this.init();
  }

  init = () => {
    this.model.getCart();
    const total = this.model.countTotal();
    this.view.renderTotal(total);
  };

  onOpen = () => {
    const cart = this.model.getCart();
    this.getCartData(cart);
  };

  onAdd = (product) => {
    const cart = this.model.addToCart(product);
    this.view.renderIcon(cart);
  };

  onAddOpen = (e) => {
    const cart = this.model.addExisting(e.target.dataset.detailsId);
    this.getCartData(cart);
  };

  onReduce = (e) => {
    const cart = this.model.reduceAmount(e.target.dataset.detailsId);
    this.getCartData(cart);
  };

  onDelete = (e) => {
    const cart = this.model.deleteItem(e.target.dataset.detailsId);
    this.getCartData(cart);
  };

  onOrder = () => {
    const total = this.model.countTotal();
    this.notify(this.events.MAKE_ORDER, total);
  };

  onReset = () => {
    this.model.resetCart();
    this.view.renderIcon();
  };

  getCartData = (cart) => {
    this.view.renderCart(cart);
    this.view.renderIcon(cart);
    const total = this.model.countTotal();
    this.view.renderTotal(total);
  };
}