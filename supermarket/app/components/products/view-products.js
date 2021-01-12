export default class ViewProducts {
  htmlProducts = document.querySelector(".products");
  htmlPagination = document.querySelector(".pagination");
  prodsOnPage = 9;
  active = 1;

  constructor(onDetails, onAdd) {
    this.onDetails = onDetails;
    this.onAdd = onAdd;
  }

  render = (arr) => {
    this.products = arr;
    this.pages = this.pageCount(arr);
    this.renderPagination(this.pages, this.active);
    const start = (this.active - 1) * 9;
    const end =
      start + this.prodsOnPage > arr.length - 1
        ? undefined
        : start + this.prodsOnPage;
    const activeProds = arr.slice(start, end);

    this.htmlProducts.innerHTML = activeProds.map(this.renderCard).join("");
    [
      ...this.htmlProducts.querySelectorAll(".card .btn-details"),
    ].forEach((btn) => btn.addEventListener("click", this.onDetails));
    [...this.htmlProducts.querySelectorAll(".card .btn-add")].forEach((btn) =>
      btn.addEventListener("click", this.onAdd)
    );
  };

  renderCard = ({ product, units, price, src, id }) => {
    return `<div class="card d-flex flex-column justify-content-between" style="width: 18rem;">
        <div class="m-auto p-2" style="height: 18rem;">
          <img class="card-img-top"  style="width: 16rem;" src=${src} alt="${product} preview"></div>
        <div class="card-body h-50 d-flex flex-column justify-content-between">
          <h5 class="card-title">${product}</h5>
          <div class="d-flex justify-content-between">
              <p class="card-text">${units}</p>
              <h5 class="card-text">${price}$</h5>
          </div>
          
         
          <div class="d-flex justify-content-between">
            <button class="btn btn-outline-secondary btn-details" data-bs-toggle="modal" data-bs-target='#prodDetails' data-details-id="${id}">More details</button>
            <button class="btn btn-dark btn-add" data-details-id="${id}">Add to the cart</button>
          </div>
      </div>
    </div>`;
  };

  renderPagination = (pages) => {
    const pagesArr = [];

    if (pages > 1) {
      for (let i = 1; i <= pages; i++) {
        let isActive = i === this.active ? "active" : "";
        pagesArr.push(
          `<li class="page-item ${isActive} m-1" data-details-num="${i}"><button class="btn page-link" data-details-num="${i}">${i}</button></li>`
        );
      }
    }
    this.htmlPagination.innerHTML = pagesArr.join("");
    this.htmlPageBtn = document.querySelectorAll(".page-link");
    [...this.htmlPageBtn].forEach((elem) =>
      elem.addEventListener("click", (e) => {
        this.active = +e.target.dataset.detailsNum;

        this.render(this.products);
      })
    );
  };

  pageCount = (elems) => Math.ceil(elems.length / this.prodsOnPage);
}