const { I } = inject();
const loginFunction = require("../page/login/index.js");
const loginLocator = require("../page/login/locator.js");
const MyVariable = require("../page/common/variable");
// const email = 'nguyenpv19406c@st.uel.edu.vn'
// const password = 'nguyen063@UEL'

// const loginFunction = require('../page/login/index')
// const loginLocator = require('../page/login/locator')


Given("I login to Casso page", () => {
  loginFunction.login(
    loginLocator.urlLoginPage,
    MyVariable.email,
    MyVariable.password
  );
});



