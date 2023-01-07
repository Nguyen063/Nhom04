const Myfunctions = require("./functions");
module.exports = {
  email: "nguyenpv19406c@st.uel.edu.vn",
  password: "nguyen063@UEL",
  companyName: "Nhom04" + Myfunctions.randomNumber(1, 100),
  website: "https://" + "Nhom04" + Myfunctions.randomString(3) + ".com.vn",
  apiKey:
    "N4" + Myfunctions.randomNumber(1, 100) + Myfunctions.randomString(3),
  editNameApiKey:
    "Edit" + Myfunctions.randomNumber(1, 100) + Myfunctions.randomString(3),
};
