const axios = require("axios");
const { API } = require("src/config");
require("dotenv").config();

//get employees
exports.getEmployees = () => {
  return axios
    .get(`${API}/employee`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("jwt")).token
        }`,
      },
    })
    .then((result) => result.data)
    .catch((err) => {
      console.log("Error: ", err);
    });
};
//login
exports.login = (username, password) => {
  console.log("server ip: ", process.env.SERVER_IP);
  const json = {
    username: username,
    password: password,
  };
  axios
    .post(`${API}/admin/login`, json)
    .then((result) => {
      return JSON.parse(result.data);
    })
    .catch((error) => {
      return { error: error };
    });
};

//save authentication infos in local storage
exports.authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    axios
      .get(`${API}/employee`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      })
      .then((result, err) => {
        if (err) {
          console.log("error: ", err);
          return;
        }
        var usersData = [];
        console.log("data: ", result);
        result.data.employees.map((employee) => {
          usersData.push({
            id: employee._id,
            name: `${employee.nom} ${employee.prenom}`,
            registered: "2018/01/01",
            role: employee.poste,
            status: "Pending",
            img: `data:image/png;base64,${employee.image}`,
          });
        });
        localStorage.setItem("users", JSON.stringify(usersData));
      });
    next();
  }
};

//signout
exports.signout = (next) => {
  if (typeof window != "undefined") {
    localStorage.removeItem("jwt");
    localStorage.removeItem("users");
    next();
    return axios
      .get(`${API}/admin/signout`)
      .then((result) => {
        console.log("Signout: ", result);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }
};

//is Authenticate
exports.isAuthenticate = () => {
  if (typeof window == "undefined") return false;
  if (localStorage.getItem("jwt"))
    return JSON.parse(localStorage.getItem("jwt"));
  return false;
};

//is Admin
exports.isAdmin = () => {
  if (!localStorage.getItem("jwt")) return false;
  return JSON.parse(localStorage.getItem("jwt")).type == 0;
};
//add new user
exports.addEmployee = (nom, prenom, email, telephone, poste, image) => {
  let data = new FormData();
  data.append("image", image, nom + " " + prenom);
  data.append("nom", nom);
  data.append("prenom", prenom);
  data.append("email", email);
  data.append("telephone", telephone);
  data.append("poste", poste);

  axios
    .post(`${API}/employee/add`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => {
      console.log("response: ", response);
    })
    .catch((err) => console.log("err: ", err));
};

//get employee's card
exports.getCard = (id) => {
  return axios
    .get(`${API}/employee/card/${id}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("jwt")).token
        }`,
      },
    })
    .then((result) => {
      var arrBuffer = base64ToArrayBuffer(result.data.file);
      const file = new Blob([arrBuffer], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      const pdfWindow = window.open();
      pdfWindow.location.href = fileURL;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

//get employee
exports.getEmployee = (id) => {
  return axios
    .get(`${API}/employee/${id}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("jwt")).token
        }`,
      },
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};
//base64 String to ArrayBuffer
function base64ToArrayBuffer(base64) {
  var binary_string = window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}
