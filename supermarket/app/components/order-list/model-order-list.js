export default class ModelOrderList {
  getOrders = () => {
    console.log("smt");
    this.orders = localStorage.getItem("orderList")
      ? JSON.parse(localStorage.getItem("orderList"))
      : [];
    return this.orders;
  };
}
