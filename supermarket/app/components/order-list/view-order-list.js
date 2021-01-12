export default class ViewOrderList {
  htmlModalContainer = document.querySelector(".modals");
  htmlListBtn = document.querySelector(".order-list");

  constructor(cbInit) {
    this.htmlModalContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="modal fade" id="orderList" tabindex="-1" aria-labelledby="productDescription" width="1000" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Order List</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                    </div>
                </div>
            </div>
        </div>`
    );

    this.htmlListBtn.addEventListener("click", cbInit);
    this.htmlOrderList = document.querySelector("#orderList .modal-body");
  }

  render = (orders) => {
    if (orders.length == 0) {
      this.htmlOrderList.innerHTML = `Waiting for clients. There is no orders for now.`;
    } else {
      this.htmlOrderList.innerHTML = `
            <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                        </table>
            `;
      orders.forEach((order) => {
        document
          .querySelector("table")
          .insertAdjacentHTML("beforeend", this.renderOrder(order));
      });
    }
  };

  renderOrder = ({ id, date, name, email, total }) => {
    return `
          <tr>
            <td>${id}</td>
            <td>${date}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>$${total}</td>
          </tr>`;
  };
}