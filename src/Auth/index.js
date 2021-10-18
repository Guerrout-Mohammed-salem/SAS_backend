const { axios } = require("axios");
require("dotenv").config();

exports.login = (username, password) => {
  axios
    .post(`${process.env.SERVER_IP}/api/admin/login`, {
      username,
      password,
    })
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      return { error };
    });
};
