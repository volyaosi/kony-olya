export default class ViewSearchPanel {
  htmlSort = document.querySelector(".sort");
  htmlFilter = document.querySelector(".filter");
  htmlSearch = document.querySelector(".search");

  constructor(cbSort, cbFilter, cbSearch) {
    this.htmlSort.addEventListener("input", cbSort);
    this.htmlFilter.addEventListener("input", cbFilter);
    this.htmlSearch.addEventListener("input", cbSearch);
  }
}