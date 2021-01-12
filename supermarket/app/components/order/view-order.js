export default class ViewOrder {
  htmlModalContainer = document.querySelector(".modals");

  constructor(cbFieldInput, cbSubmit) {
    this.htmlModalContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="modal fade" id="order" tabindex="-1" aria-labelledby="cartDetails" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cartDetails">Complete Order</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                       <div class="field-container">
                            <input type="text" required name="name" id="name" placeholder="Your Name" class='field regular-border'>
                        </div>
                        <div class="field-container">
                            <input type="email" required name="email" id="email" placeholder="Your Email" class='field regular-border'>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="m-3 p-2">
                            <button class="btn btn-dark btn-lg ml-2 buy-btn">Complete Order</button>
                            <button class="btn btn-outline-secondary btn-lg ml-2" type="button" data-bs-dismiss="modal" aria-label="Close">Continue Shopping</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>`
    );

    this.fields = document.querySelectorAll(".field");
    [...this.fields].forEach((field) =>
      field.addEventListener("blur", cbFieldInput)
    );

    this.submitBtn = document.querySelector("#order .buy-btn");
    this.submitBtn.addEventListener("click", cbSubmit);

    this.modal = document.querySelector("#order .modal-content");
  }

  render = (elem) => {
    let field = document.querySelector(`#${elem.name}`);
    this.removeErr(field);

    if (!elem.isValid) {
      field.classList.remove("success-border");
      this.generateErr(field, elem.err);
    } else {
      field.classList.add("success-border");
    }
  };

  generateErr = (elem, message) => {
    let error = document.createElement("div");
    error.classList.add("error");
    error.innerHTML = message;
    elem.after(error);
    elem.classList.add("error-border");
  };

  removeErr = (elem) => {
    let error = elem.nextElementSibling;
    if (error) {
      error.remove();
      elem.classList.remove("error-border");
    }
  };

  orderConfirm = () => {
    this.modal.innerHTML = `<div class="modal-header">
        <h5 class="modal-title" id="cartDetails">Your order is placed successfuly. Thank you for shopping with us.</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>`;
  };
}