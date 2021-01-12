export default class ModelOrderList {
  getOrders = () => {
    this.orders = localStorage.getItem("orderList")
      ? JSON.parse(localStorage.getItem("orderList"))
      : [];
    return this.orders;
  };
}