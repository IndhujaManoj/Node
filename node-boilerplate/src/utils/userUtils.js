// userUtils.js
const transformUserData = (reqBody) => {
    return {
      mobile: reqBody.mobile,
      password: reqBody.password,
      role_code: reqBody.role_code,
      shop_id: reqBody.shop_id,
      status: reqBody.status,
    };
  };
  
  module.exports = {
    transformUserData,
  };
  