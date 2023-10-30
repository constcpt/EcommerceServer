const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-generic-session");
const cors = require("koa2-cors");

const index = require("./routes/index");
const users = require("./routes/users");
const addressRouter = require("./routes/address");
const shopRouter = require("./routes/shop"); // 路由定义完了，别忘了在 app.js 里注册
const orderRouter = require("./routes/order"); // 路由定义完了，别忘了在 app.js 里注册

// error handler
onerror(app);

//cors配置
app.use(
  cors({
    // origin: "http://localhost:8080", //前端origin
    origin: "https://ecommercefrontend-1af12.web.app", //前端origin
    credentials: true, //允许跨域携带cookie
  })
);
app.proxy = true;

//配置session
app.keys = ["sdkk^&)76879sSA"]; //秘钥，用于加密
app.use(
  session({
    //配置cookie
    cookie: {
      path: "/",
      httpOnly: true, //只能通过后端修改cookie，不允许前端js改
      maxAge: 24 * 60 * 60 * 10000, //24h Cookie过期时间
      sameSite: "None",
      secure: true,
    },
  })
);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(addressRouter.routes(), addressRouter.allowedMethods());
app.use(shopRouter.routes(), shopRouter.allowedMethods()); // 注册路由
app.use(orderRouter.routes(), orderRouter.allowedMethods()); // 注册路由

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
