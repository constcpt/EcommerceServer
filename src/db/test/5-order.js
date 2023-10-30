/**
 * @description Order Data Operation
 */

const Order = require("../../models/Order");
const Product = require("../../models/Product");
const Address = require("../../models/Address");

!(async () => {
  //创建订单
  const requestBody = {
    addressId: "65363bf82c42ffc2df181a4e", // UTS Housing address
    shopId: "653652f9c8a954084afa8fc4", // Coles shop
    shopName: "Coles",
    isCanceled: false, //订单是否被取消
    products: [
      {
        id: "65365984ce3c0ede9ca5c0ae", // Coles - Grapes
        num: 3, //购买数量
      },
      {
        id: "65365984ce3c0ede9ca5c0b3", // Coles - Crab 250g
        num: 5,
      },
    ],
  };
  // 获取 address
  const address = await Address.findById(requestBody.addressId);

  // 获取商品列表
  const pIds = requestBody.products.map((p) => p.id); //['商品1 id'],['商品2 id']
  const productList = await Product.find({
    shopId: requestBody.shopId, //Coles的商品
    _id: {
      $in: pIds,
    },
  });
  // console.log(pIds);
  // console.log(productList);

  //整合订单购买数量
  const productListWidthSales = productList.map((p) => {
    // 商品 id
    const id = p._id.toString();

    // 找到商品的购买数量
    const filterProducts = requestBody.products.filter(
      (item) => item.id === id
    );
    if (filterProducts.length === 0) {
      // 没有找到匹配的数量，报错
      throw new Error("No matching sales data found");
    }

    return {
      orderSales: filterProducts[0].num, // 销量
      // product: p,
      product: {
        shopId: p.shopId,
        name: p.name,
        imgUrl: p.imgUrl,
        sales: p.sales,
        price: p.price,
        oldPrice: p.oldPrice,
      },
    };
  });
  // console.log(productListWidthSales)
  // 创建订单
  await Order.create({
    username: "zhangsan",
    shopId: requestBody.shopId,
    shopName: requestBody.shopName,
    isCanceled: requestBody.isCanceled,
    products: productListWidthSales,
    // address
    address: {
      username: address.username,
      city: address.city,
      department: address.department,
      houseNumber: address.houseNumber,
      name: address.name,
      phone: address.phone,
    },
  });
  // console.log(address)
})();
