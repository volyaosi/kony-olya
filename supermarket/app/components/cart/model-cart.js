export default class ModelCart {
  getCart = () => {
    this.cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
    return this.cart;
  };

  addToCart = ({ id, product, price, src, amount }) => {
    if (!this.cart[id]) {
      this.cart[id] = { id, product, price, src, amount, qty: 1 };
    } else {
      let newAmount = this.cart[id].qty + 1;
      this.cart[id].qty =
        newAmount > this.cart[id].amount ? this.cart[id].amount : newAmount;
    }

    localStorage.setItem("cart", JSON.stringify(this.cart));
    return this.cart;
  };

  addExisting = (id) => {
    let newAmount = this.cart[id].qty + 1;
    this.cart[id].qty =
      newAmount > this.cart[id].amount ? this.cart[id].amount : newAmount;
    return this.updateCart();
  };

  deleteItem = (id) => {
    delete this.cart[id];
    return this.updateCart();
  };

  reduceAmount = (id) => {
    if (this.cart[id]) {
      let newAmount = this.cart[id].qty - 1;
      this.cart[id].qty = newAmount < 0 ? 0 : newAmount;
      return this.updateCart();
    }
  };

  updateCart = () => {
    localStorage.setItem("cart", JSON.stringify(this.cart));
    return this.cart;
  };

  countTotal = () => {
    let res = 0;
    for (let elem in this.cart) {
      res += this.cart[elem].price * this.cart[elem].qty;
    }
    return res;
  };

  resetCart = () => {
    localStorage.removeItem("cart");
  };
}