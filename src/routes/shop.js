/**
 * @description shop router
 */
const router = require("koa-router")();

const { SuccessModel, ErrorModel } = require("../res-module/index");
const {
  getHotList,
  getShopInfo,
  getProductsByShopId,
} = require("../controller/shop");

router.prefix("/api/shop");

// Home Page Shop List，商店列表不需要登录验证，所以不需要 loginCheck 中间件。但是不登陆绝对不能看到用户的个人信息如收货地址列表
router.get("/hot-list", async function (ctx, next) {
  const list = await getHotList();
  ctx.body = new SuccessModel(list);
});

// Get store information by id
router.get("/:id", async function (ctx, next) {
  const id = ctx.params.id; // 商店 id
  const shop = await getShopInfo(id);
  ctx.body = new SuccessModel(shop);
});
// Get products by store id
router.get("/:id/products", async function (ctx, next) {
  const shopId = ctx.params.id; // 商店 id
  const tab = ctx.query.tab || "all"; // query 里的 tab 参数，默认为 'all'
  // 获取商品
  const products = await getProductsByShopId(shopId, tab);
  ctx.body = new SuccessModel(products);
});

module.exports = router;
