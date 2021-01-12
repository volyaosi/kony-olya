export default class ViewCart {
  htmlCartIcon = document.querySelector(".cart-btn");
  htmlCartBadge = document.querySelector(".cart-badge");
  htmlModalContainer = document.querySelector(".modals");

  constructor(cbInit, cbAddCart, cbReduce, cbDelete, cbOrder) {
    this.htmlCartIcon.addEventListener("click", cbInit);
    this.cbAddCart = cbAddCart;
    this.cbReduce = cbReduce;
    this.cbDelete = cbDelete;
    this.cbOrder = cbOrder;

    this.htmlModalContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="modal fade" id="cart" tabindex="-1" aria-labelledby="cartDetails" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cartDetails">Shopping cart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <h5>Total<span class="text-grey p-3 total-amount"></span></h5>
                        <div class="m-3 p-2">
                            <button data-bs-toggle="modal" data-bs-target="#order" class="btn btn-dark btn-lg ml-2 order-button" type="button"  data-bs-dismiss="modal" aria-label="Close">Complete Order</button>
                            <button class="btn btn-outline-secondary btn-lg ml-2" type="button" data-bs-dismiss="modal" aria-label="Close">Continue Shopping</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>`
    );

    this.htmlCartModal = document.querySelector("#cart");
    this.htmlCart = document.querySelector("#cart .modal-body");
    this.htmlTotal = document.querySelector("#cart .total-amount");
    this.htmlOrder = document.querySelector("#cart .order-button");
  }

  renderCart = (obj) => {
    let records = [];
    for (let elem in obj) {
      records.push(this.renderProducts(obj[elem]));
    }
    if (records.length === 0) {
      this.htmlCart.innerHTML = `Your cart is empty`;
    } else {
      this.htmlCart.innerHTML = records.join("");
    }

    this.htmlAddCart = document.querySelectorAll("#cart .plus");
    this.htmlReduce = document.querySelectorAll("#cart .minus");
    this.htmlDelete = document.querySelectorAll("#cart .delete");
    this.addListeners();
  };

  renderTotal = (sum) => (this.htmlTotal.innerHTML = `$${sum}`);

  addListeners = () => {
    [...this.htmlAddCart].forEach((el) =>
      el.addEventListener("click", this.cbAddCart)
    );
    [...this.htmlReduce].forEach((el) =>
      el.addEventListener("click", this.cbReduce)
    );
    [...this.htmlDelete].forEach((el) =>
      el.addEventListener("click", this.cbDelete)
    );
    this.htmlOrder.addEventListener("click", this.cbOrder);
  };

  renderProducts = ({ src, product, id, price, qty }) => {
    return `<div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div class="mr-1 w-75 d-flex flex-row align-items-center">
           <img class="rounded" src="${src}" width="30">
           <span class="product">${product}</span>
        </div>
        <div class="d-flex flex-row align-items-center qty">
            <button class="minus btn btn-outline-danger" data-details-id="${id}">−</button>
            <h6 class="text-grey p-3">${qty}</h6>
            <button class="plus btn btn-outline-danger" data-details-id="${id}">+</button>
        </div>
        <h5 class="text-grey p-3" style="flex-basis:70px;">$${price * qty}</h5>

        <button class="d-flex align-items-center delete btn" data-details-id="${id}">✖</button>
    </div>`;
  };

  renderIcon = (cart = 0) => {
    let count = 0;
    for (let prod in cart) {
      count += cart[prod].qty;
    }
    if (count === 0) {
      this.htmlCartBadge.innerHTML = "";
    } else {
      this.htmlCartBadge.innerHTML = `<span class="badge-pill btn-outline-danger badge">${count}</span>`;
    }
  };
}
