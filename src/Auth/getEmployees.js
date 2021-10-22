import axios from "axios";
import { API } from "src/config";

async function getEmployees() {
  return await axios
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
}

export default getEmployees;
