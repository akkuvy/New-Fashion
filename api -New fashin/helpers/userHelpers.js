const db = require("../config/connection");
const collection = require("../config/collection");
const { response } = require("express");
const { ObjectId } = require("mongodb");

module.exports = {
  getAllProducts: () => {
    return new Promise(async (resolve, reject) => {
      //adding predefined data to databse

      const prod = [
        {
          name: "Mens Pants",
          smalldescription: "nice red pants ",
          price: 11,
          offerPrice: 9,
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
          imageLink:
            "https://imagescdn.peterengland.com/img/app/product/7/https://i.pinimg.com/236x/f7/ac/4b/f7ac4b0d00b88971386937151f5b2eb8.jpg-8315942.jpg?q=75&auto=format&w=342",
        },
        {
          name: "Womens T Shirt",
          smalldescription: "nice red color Women shirts ",
          price: 13,
          offerPrice: 8,
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
          imageLink:
            "https://imahttps://cdn.shopify.com/s/files/741423/0604/6957/5837/products/11a_7d3b7868-9a8d-4610-8390-16c2c31f34d8_540x.jpg?v=1656764550gescdn.peterengland.com/img/app/product/7/741423-8315942.jpg?q=75&auto=format&w=342",
        },
        {
          name: "Mens glasses",
          smalldescription: "nice eye glasses ",
          price: 9,
          offerPrice: 5,
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
          imageLink:
            "https://imagescdn.peterengland.com/741423/app/product/7/741423-https://cdn.shopify.com/s/files/1/2436/7047/products/QQ_20190515130512_540x.jpg?v=1558002425.jpg?q=75&auto=format&w=342",
        },
        {
          name: "womens caps",
          smalldescription: "nice red women caps",
          price: 15,
          offerPrice: 11,
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset",
          imageLink:
            "https://imagescdn.peterengland.741423/img/app/https://rukminim1.flixcart.com/image/612/612/jdvziq80/cap/k/q/5/free-a1-bezal-original-imaf2khj7ymzbrq4.jpeg?q=70/7/741423-8315942.jpg?q=75&auto=format&w=342",
        },
      ];
      const CheckProduct = await db
        .get()
        .collection(collection.PRODUCT_COLLECTION)
        .find()
        .toArray();

      if (CheckProduct.length == 0) {
        await db
          .get()
          .collection(collection.PRODUCT_COLLECTION)
          .insertMany(prod)
          .then(async () => {
            const products = await db
              .get()
              .collection(collection.PRODUCT_COLLECTION)
              .find()
              .toArray();
            resolve(products);
          });
      } else {
        const products = await db
          .get()
          .collection(collection.PRODUCT_COLLECTION)
          .find()
          .toArray();

        resolve(products);
      }
    });
  },

  // add products to cart
  addTocart: (item) => {
    console.log(item.item._id);
    return new Promise(async (resolve, reject) => {
      let prod = await db
        .get()
        .collection(collection.CART_COLLECTION)
        .findOne({ _id: item.item._id });
      console.log(prod);
      if (prod) {
        resolve({ message: "item already in caert" });
      } else {
        item.item.count = 1;
        await db
          .get()
          .collection(collection.CART_COLLECTION)
          .insertOne(item.item)
          .then((response) => {
            resolve({ message: " item added to cart" });
          });
      }
    });
  },

  getCartProducts: () => {
    return new Promise(async (resolve, reject) => {
      let cartProducts = await db
        .get()
        .collection(collection.CART_COLLECTION)
        .find()
        .toArray();
      resolve(cartProducts);
    });
  },
};
