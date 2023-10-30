/**
 * @description order router
 */

const router = require("koa-router")();

const { SuccessModel, ErrorModel } = require("../res-module/index");
const loginCheck = require("../middleware/loginCheck");
// 注意这里需要写成{ createOrder }，不能单写createOrder
const { createOrder, getOrderList } = require("../controller/order");

router.prefix("/api/order");

// 创建订单
router.post("/", loginCheck, async function (ctx, next) {
  // 当前用户名
  const userInfo = ctx.session.userInfo;
  const username = userInfo.username;

  // 获取订单数据
  const data = ctx.request.body;

  //创建订单
  try {
    const newOrder = await createOrder(username, data);
    ctx.body = new SuccessModel(newOrder);
  } catch (ex) {
    console.error(ex);
    ctx.body = new ErrorModel(10005, "Order creation failed");
  }
});

// 获取订单列表（作业）
router.get("/", loginCheck, async function (ctx, next) {
  // 有登录验证，可以直接获取 session
  const userInfo = ctx.session.userInfo;
  const username = userInfo.username;

  const list = await getOrderList(username);

  ctx.body = new SuccessModel(list);
});

module.exports = router;
