/**
 * @description shop controller
 */

const Shop = require("../models/Shop");
const Product = require("../models/Product");

/**
 * Get Home Page Shop List
 */
async function getHotList() {
  const list = await Shop.find().sort({ _id: -1 }); // 逆序
  return list;
}

/**
 * Get store information by id
 * @param {string} id id
 */
async function getShopInfo(id) {
  const shop = await Shop.findById(id);
  return shop;
}
/**
 * Get products by store id
 * @param {string} shopId 商店id
 * @param {string} tab tab分类
 */
async function getProductsByShopId(id, tab = "all") {
  const list = await Product.find({
    // shopId,
    // 由于mongooose版本的影响，这里需要按照如下方式书写
    shopId: id,

    tabs: {
      $in: tab, // 匹配 tabs
    },
  }).sort({ _id: -1 }); // 逆序
  return list;
}

module.exports = {
  getHotList,
  getShopInfo,
  getProductsByShopId,
};
