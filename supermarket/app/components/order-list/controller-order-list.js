import ViewOrderList from "./view-order-list.js";
import ModelOrderList from "./model-order-list.js";

export default class ControllerOrderList {
  constructor() {
    this.view = new ViewOrderList(this.onInit);
    this.model = new ModelOrderList();
  }

  onInit = () => {
    const orders = this.model.getOrders();
    this.view.render(orders);
  };
}
