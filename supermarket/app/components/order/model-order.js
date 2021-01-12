export default class ModelOrder {
  newOrder = {};
  regExpName = /^[a-zа-яё ,.'-]+$/i;
  regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{1,4}$/i;
  fields = {};

  init = (d, input) => {
    this.newOrder.total = d;
    this.getOrders();

    input.forEach((field) => {
      this.fields[field.name] = {
        name: field.name,
        value: field.value,
        isValid: false,
        err: "",
      };
    });
  };

  getOrders = () => {
    this.orderList = localStorage.getItem("orderList")
      ? JSON.parse(localStorage.getItem("orderList"))
      : [];
    return this.orders;
  };

  addNewOrder = () => {
    for (let el in this.fields) {
      this.newOrder[this.fields[el].name] = this.fields[el].value;
    }
    this.newOrder.date = this.getTime(Date.now());
    this.newOrder.id = Math.random().toString(16).slice(2);

    this.orderList.push(this.newOrder);
    localStorage.setItem("orderList", JSON.stringify(this.orderList));
  };

  submit = (fields) => {
    fields.forEach((field) => this.validateInput(field));

    for (let el in this.fields) {
      if (!this.fields[el].isValid) {
        return { status: false, data: this.fields[el] };
      }
    }

    this.addNewOrder();
    return { status: true, data: this.newOrder };
  };

  validateInput = (elem) => {
    switch (elem.name) {
      case "name":
        if (!this.regExpName.test(elem.value) || elem.value.length === 0) {
          this.fields[elem.name].err =
            "Submit your name: latin and cyrillic letters are allowed";
          this.fields[elem.name].isValid = false;
          break;
        }
        this.fields[elem.name].isValid = true;
        this.fields[elem.name].value = elem.value;
        this.fields[elem.name].err = "";
        break;

      case "email":
        if (
          !this.regExpEmail.test(elem.value) ||
          elem.value.trim().length <= 0
        ) {
          this.fields[elem.name].err = "Please enter the correct email";
          this.fields[elem.name].isValid = false;
          break;
        }
        this.fields[elem.name].isValid = true;
        this.fields[elem.name].err = "";
        this.fields[elem.name].value = elem.value;
        break;
    }
    return this.fields[elem.name];
  };

  getTime(timestamp) {
    const d = new Date(timestamp);
    const yyyy = d.getFullYear();
    const mm = ("0" + (d.getMonth() + 1)).slice(-2);
    const dd = ("0" + d.getDate()).slice(-2);
    const hh = d.getHours();
    const min = ("0" + d.getMinutes()).slice(-2);

    const time = yyyy + "-" + mm + "-" + dd + ", " + hh + ":" + min;
    return time;
  }
}