/**
 * @description Product Data Operation
 */

const Product = require("../../models/Product");

!(async () => {
  //   // 创建
  //   await Product.create({
  //     shopId: "653652f9c8a954084afa8fc4", // Coles
  //     name: "Grapes",
  //     imgUrl: "/images/product/grape.jpg",
  //     sales: 100, // 月售多少
  //     price: 33, // 当前价格
  //     oldPrice: 36, // 原价
  //     tabs: ["all", "fruit"],
  //   });
  //   // 创建
  //   await Product.create({
  //     shopId: "653652f9c8a954084afa8fc4", // Coles
  //     name: "Apple",
  //     imgUrl: "/images/product/apple.jpeg",
  //     sales: 200, // 月售多少
  //     price: 25, // 当前价格
  //     oldPrice: 27, // 原价
  //     tabs: ["all", "fruit"],
  //   });
  //   await Product.create({
  //     shopId: "653652f9c8a954084afa8fc4", // Coles
  //     name: "Crab 250g",
  //     imgUrl: "/images/product/crab.jpg",
  //     sales: 10,
  //     price: 99.6,
  //     oldPrice: 110,
  //     tabs: ["all", "seafood"],
  //   });
  //   // 创建
  //   await Product.create({
  //     shopId: "653652fac8a954084afa8fc7", // Woolworths
  //     name: "Peach",
  //     imgUrl: "/images/product/peach.jpg",
  //     sales: 50, // 月售多少
  //     price: 16, // 当前价格
  //     oldPrice: 19, // 原价
  //     tabs: ["all", "fruit"],
  //   });
  //   // 创建
  //   await Product.create({
  //     shopId: "653652fac8a954084afa8fc7", // Woolworths
  //     name: "Watermelon",
  //     imgUrl: "/images/product/watermelon.jpg",
  //     sales: 180, // 月售多少
  //     price: 13, // 当前价格
  //     oldPrice: 15, // 原价
  //     tabs: ["all", "fruit"],
  //   });

  // 查询某个商店，某个tab的商品列表
  //   const list = await Product.find({
  //     shopId: "653652f9c8a954084afa8fc4", // Coles's id
  //   });
  const list = await Product.find({
    shopId: "653652f9c8a954084afa8fc4", //Coles's id
    tabs: {
      $in: "all",
    },
  });
  console.log(list);
})();
