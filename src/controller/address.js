/**
 * @description address controller
 */

const Address = require("../models/Address");

/**
 * Create Address
 * @param {string} username 用户名
 * @param {Object} data 地址的详细信息
 */
async function createAddress(username, data) {
  const address = await Address.create({
    username, // 把 username 拼接上，因为前端传入的数据没有 username
    ...data,
  });
  return address;
}

/**
 * Get Address List
 * @param {string} username 用户名
 */
async function getAddressList(username) {
  const list = await Address.find({ username }).sort({ updatedAt: -1 }); // 按更新时间倒序
  return list;
}

/**
 * Find a single shipping address
 * @param {string} id id
 */
async function getAddressById(id) {
  const address = await Address.findById(id);
  return address;
}
/**
 * Update address information
 * @param {string} id id
 * @param {string} username 用户名
 * @param {Object} data 地址的详细信息
 */
async function updateAddress(id, username, data) {
  const address = await Address.findOneAndUpdate(
    { _id: id, username }, // 查询条件
    { username, ...data }, // 要更新的数据，别忘了 username
    { new: true } // 返回更新之后的最新数据，默认是 false 返回更新之前的数据
  );
  return address;
}

module.exports = {
  createAddress,
  getAddressList,
  getAddressById,
  updateAddress,
};
