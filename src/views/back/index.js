import axios from "axios";
import FormData from "form-data";
import { API } from "src/config";

exports.addUser = (nom, prenom, email, telephone, poste, image) => {
  let data = new FormData();
  data.append("image", image);
  data.append("nom", nom);
  data.append("prenom", prenom);
  data.append("email", email);
  data.append("telephone", telephone);
  data.append("poste", poste);

  axios
    .post({
      method: "post",
      url: `${API}/employee/add`,
      data: data,
      headers: { "Content/Type": "multipart/form-data" },
    })
    .then((response) => {
      console.log("response: ", response);
    })
    .catch((err) => console.log("err: ", err));
};
