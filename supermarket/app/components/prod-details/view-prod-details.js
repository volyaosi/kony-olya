export default class ViewProdDetails {
  htmlModalContainer = document.querySelector(".modals");

  constructor() {
    this.htmlModalContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="modal fade" id="prodDetails" tabindex="-1" aria-labelledby="productDescription" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="productDescription">Product Detail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    </div>
                </div>
            </div>
        </div>`
    );

    this.htmlProdDetails = document.querySelector("#prodDetails .modal-body");
  }

  render = ({ src, product, manufacture, units, ingridients, price, id }) => {
    this.htmlProdDetails.innerHTML = `<div class="d-flex flex-column justify-content-between">
        <div><img class="card-img-top"  style="width: 12rem; height: 12rem;" src=${src} alt="${product} preview"></div>
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${product}</h5>
          <h6 class="card-text">Manufacture:</h6>
          <p class="card-text">${manufacture}</p>
          <h6 class="card-text">Ingridients:</h6>
          <p class="card-text">${ingridients.toLowerCase()}.</p>
          <div class="card-body d-flex justify-content-between">
            <p class="card-text">Unit:${units}</p>
            <h6 class="card-text">${price}$</h6>
          </div>
      </div>
    </div>`;
  };
}