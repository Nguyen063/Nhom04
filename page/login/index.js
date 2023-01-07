const {I} = inject()
const loginLocator = require('./locator')
const timeout = require('../common/timeout')
// const default: timedOut = require('got/dist/source/core/timed-out')

module.exports = {
    login(url, email, password) {
        I.amOnPage(url)
        I.fillField(loginLocator.emailField, email)
        I.fillField(loginLocator.passwordField, password)
        I.click(loginLocator.loginButton)
       
       I.waitForElement(loginLocator.menu.dangXuatText, timeout.loading)
    }

}