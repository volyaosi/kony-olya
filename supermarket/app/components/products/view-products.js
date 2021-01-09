export default class ViewProducts {
  htmlProdBox = document.querySelector('.products');

  constructor() {
  }

  render = arr => {
      this.htmlProdBox.innerHTML = arr.map(this.renderCard).join('');
     
  }

  renderCard  = ({ product, manufacture, units, price, src }) => {
      return `<div class="card d-flex flex-column justify-content-between" style="width: 18rem;">
        <img class="card-img-top"  style="width: 16rem; height: 16rem;" src=${ src } alt="${ product } preview">
        <div class="card-body h-50 d-flex flex-column justify-content-between">
          <h5 class="card-title">${ product }</h5>
          <p class="card-text">${ manufacture }</p>
          <h6 class="card-text">${ price }$</h6>
          <a href="#" class="btn btn-dark">More details</a>
       </div>
      </div>
    </div>`;            
  }
}