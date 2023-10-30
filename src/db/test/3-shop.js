/**
 * @description Shop data operation
 */

const Shop = require("../../models/Shop");

// images/shop/sam.jpeg
// images/shop/wmt.jpeg

!(async () => {
  // 创建两个商店
  //   await Shop.create({
  //     name: "Coles",
  //     imgUrl: "images/shop/Coles.png",
  //     sales: 10000,
  //     expressLimit: 0,
  //     expressPrice: 5,
  //     slogan: "Good food, Good life",
  //   });
  //   await Shop.create({
  //     name: "Woolworths",
  //     imgUrl: "images/shop/Woolworths.png",
  //     sales: 2000,
  //     expressLimit: 0,
  //     expressPrice: 5,
  //     slogan: "The Fresh Food People",
  //   });

  // 附近商店
  //   const shopList = await Shop.find().sort({ _id: -1 });
  //   console.log(shopList);

  // 获取商店详情
  const id = "653652f9c8a954084afa8fc4";
  const shop = await Shop.findById(id);
  console.log(shop);
})();
