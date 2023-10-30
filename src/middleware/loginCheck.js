/**
 * @description Login Authentication Middleware
 */

const { ErrorModel } = require("../res-module/index");

module.exports = async (ctx, next) => {
  const session = ctx.session;
  if (session && session.userInfo) {
    await next();
    return;
  }
  ctx.body = new ErrorModel(10003, "Login Authentication Failed");
};

// module.exports = async (ctx, next) => {
//     const session = ctx.session
//     if (session && session.userInfo) {
//         await next()
//         return
//     }
//     ctx.body = {
//         errno:-1,
//         message:'Login Authentication Failed'
//     }
// }
