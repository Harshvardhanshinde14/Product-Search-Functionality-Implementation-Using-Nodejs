export default class ProductModel {
  products = [
    {
      id: 1,
      name: "apple",
      image:
        "https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png",
    },
    {
      id: 2,
      name: "samsung",
      image:
        "https://w7.pngwing.com/pngs/176/171/png-transparent-samsung-galaxy-gurugram-faridabad-logo-samsung-blue-text-logo.png",
    },
    {
      id: 3,
      name: "oneplus",
      image:
        "https://pixlok.com/wp-content/uploads/2021/04/OnePlus_logo-PNG-768x768.jpg",
    },
    {
      id: 4,
      name: "Google",
      image:
        "https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png",
    },
    {
      id: 5,
      name: "apple",
      image:
        "https://www.citypng.com/public/uploads/preview/-21602680152czvchasxso.png",
    },
    {
      id: 6,
      name: "nokia",
      image:
        "https://purepng.com/public/uploads/large/purepng.com-mobile-phone-with-touchmobilemobile-phonehandymobile-devicetouchscreenmobile-phone-device-231519333033crymn.png",
    },
    {
      id: 7,
      name: "samsung",
      image:
        "https://www.primemobilestore.com/wp-content/uploads/2023/02/samsung-s23-ultra.png",
    },
    {
      id: 8,
      name: "huwai",
      image:
        "https://www.gizmochina.com/wp-content/uploads/2023/04/Huawei-nova-11-Ultra.png",
    },
    {
      id: 9,
      name: "xiomi",
      image:
        "https://technave.com/data/files/article/202207041358337214.png",
    },
    {
      id: 10,
      name: "xiomi",
      image:
        "https://technave.com/data/files/article/202207041358337214.png",
    },
    {
      id: 11,
      name: "huwai",
      image:
        "https://www.gizmochina.com/wp-content/uploads/2023/04/Huawei-nova-11-Ultra.png",
    },
    {
      id: 12,
      name: "samsung",
      image:
        "https://www.primemobilestore.com/wp-content/uploads/2023/02/samsung-s23-ultra.png",
    },
    
  ];

  getAllProducts = () => {
    return this.products;
  };
  searchResult = (name) => {
    const data = this.products.filter((product) => {
      if (product.name == name) {
        return product;
      }
    });
    return data;
  };
}
