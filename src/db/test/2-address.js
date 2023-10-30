/**
 * @description Address Data Operation
 */
const Address = require("../../models/Address");

!(async () => {
  // // 创建收货地址
  // await Address.create({
  //   username: "zhangsan", // 用户关联
  //   city: "Sydney",
  //   department: "UTS Housing",
  //   houseNumber: "1733D",
  //   name: "Hua Li",
  //   phone: "18677778888",
  // });
  // 再创建一个地址
  // await Address.create({
  //   username: "zhangsan",
  //   city: "Sydney",
  //   department: "Buiding 11",
  //   houseNumber: "1655A",
  //   name: "Hua Li",
  //   phone: "18632452342",
  // });

  // 获取收货地址列表（获取 zhangsan 的）
  // const addressList = await Address.find({
  //   username: "zhangsan",
  // }).sort({
  //   updateAt: -1,
  // });
  // console.log(addressList);
  //根据id获取单个收货地址
  // const id = "65363c0ccd3d658b1effdb5b";
  // const address = await Address.findById(id);
  // console.log(address);
  // 更新收货地址
  const id = "65363c0ccd3d658b1effdb5b";
  const newData = {
    username: "constcpt",
    city: "Beijing",
    department: "DDD department",
    houseNumber: "1999L",
    name: "Li Si",
    phone: "18632451112",
  };
  const address = await Address.findOneAndUpdate({ _id: id }, newData, {
    new: true, //返回更新之后的最新数据（默认是false，返回更新之前的数据）
  });
  console.log(address);
})();
