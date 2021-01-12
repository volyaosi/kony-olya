import ViewOrder from "./view-order.js";
import ModelOrder from "./model-order.js";

export default class ControllerOrder {
  constructor({ subscribe, events, notify }) {
    this.view = new ViewOrder(this.onFieldInput, this.onSubmit);
    this.model = new ModelOrder();

    subscribe(events.MAKE_ORDER, this.init);
    this.notify = notify;
    this.events = events;
  }

  onFieldInput = (e) => {
    const field = e.target;
    let elem = this.model.validateInput(field);
    this.view.render(elem);
  };

  onSubmit = () => {
    const response = this.model.submit(this.view.fields);
    if (response.status) {
      this.notify(this.events.COMPLETE_ORDER, response.data);
      this.view.orderConfirm();
    } else {
      this.view.render(response.data);
    }
  };

  init = (orderData) => {
    const fields = this.view.fields;
    this.model.init(orderData, fields);
  };
}
