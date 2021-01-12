export default class ModelProducts {
  link =
    "https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json";
  products = [];
  colNames = [
    {
      name: "id",
      type: "float",
    },
    {
      name: "product",
      type: "string",
    },
    {
      name: "manufacture",
      type: "string",
    },
    {
      name: "category",
      type: "string",
    },
    {
      name: "ingridients",
      type: "string",
    },
    {
      name: "amount",
      type: "string",
    },
    {
      name: "units",
      type: "float",
    },
    {
      name: "price",
      type: "float",
    },
    {
      name: "src",
      type: "string",
    },
  ];

  loadProducts = () => {
    return fetch(this.link)
      .then((response) => response.json())
      .then((data) => {
        this.products = this.parseData(data.feed.entry).slice(1);
        return this.products;
      });
  };

  parseData = (arr) => {
    const shift = this.colNames.length;

    return arr.reduce((acc, { content }, i) => {
      let { name, type } = this.colNames[i % shift];
      let j = Math.floor(i / shift);
      if (!acc[j]) {
        acc[j] = {};
      }
      acc[j][name] = this.parseContent(content.$t);
      return acc;
    }, []);
  };

  parseContent = (content, type = "string") => {
    let res = content;
    switch (type) {
      case "float": {
        res = +content.replace(",", ".");
        break;
      }
      case "date": {
        res = new Date(content);
        break;
      }
    }
    return res;
  };

  getProdById = (id) => {
    return this.products.find((el) => el.id == id);
  };
}
