/**
 * @description mongoose connects to the database
 */
// const mongoose = require("mongoose");
// const url =
//   "mongodb+srv://ahlilihf:CbLY1Sv4pSPXJ07f@cluster0.9xvtnte.mongodb.net/?retryWrites=true&w=majority";
// const dbName = "testdb";
// mongoose.connect(`${url}/${dbName}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", (err) => {
//   console.log("mongoose connect error", err);
// });

// db.once("open", () => {
//   console.log("mongoose connect success");
// });

// module.exports = mongoose;

const mongoose = require("mongoose");

// 指定数据库用户名、密码和数据库名
const username = "ahlilihf";
const password = "CbLY1Sv4pSPXJ07f";
const dbName = "testdb";

// 构建一个正确格式的MongoDB连接字符串，包括认证信息和数据库名
const url = `mongodb+srv://${username}:${password}@cluster0.9xvtnte.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // 这里可以根据需要设置额外的选项
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("mongoose connect error", err);
});

db.once("open", () => {
  console.log("mongoose connect success");
  // 当连接打开时，你可以开始进行数据库操作
});

module.exports = mongoose;
