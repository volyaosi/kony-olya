import ViewProdDetails from "./view-prod-details.js";

export default class ControllerProdDetails {
  constructor({ subscribe, events }) {
    this.view = new ViewProdDetails();

    subscribe(events.SHOW_PROD_DETAILS, this.onShowDetails);
  }

  onShowDetails = (product) => {
    this.view.render(product);
  };
}
