/**
 * @description Simulate user data operations
 */
const User = require("../../models/User");

!(async () => {
  // //注册:创建一个新的用户
  //   await User.create({
  //     username: "LiLi",
  //     password: "123",
  //   });

  //   //再建一个新的用户;
  //   await User.create({
  //     username: "zhangsan",
  //     password: "",
  //   });

  // 登录：查询单个用户
  const zhangsan = await User.findOne({
    username: "zhangsan",
    password: "abc",
  });
  console.log("zhangsan", zhangsan);
})();
