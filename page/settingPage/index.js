const { I } = inject();
const timeout = require("../common/timeout");
const settingPageLocator = require("./locator");
const customMethod = require("../../utils/customMethod");
const createNewCompanyLocator = require("../createNewCompany/locator");

module.exports = {
  viewCreationPage() {
    customMethod.clickElement(settingPageLocator.profileNameLabel);
    customMethod.clickElement(settingPageLocator.changeCompanyButton);
    customMethod.clickElement(settingPageLocator.addNewButton);
    I.waitForElement(createNewCompanyLocator.titleText, timeout.waitForElement);
  },

  addNewApiKey(apiKeyName) {
    customMethod.clickElement(settingPageLocator.menuIcon);
    customMethod.clickElement(settingPageLocator.settingTab);
    customMethod.clickElement(settingPageLocator.apiKeyTab);
    I.waitForElement(settingPageLocator.apiListTitle);
    customMethod.clickElement(settingPageLocator.addNewApiKey);
    customMethod.fieldValue(settingPageLocator.apiKeyField, apiKeyName);
    customMethod.clickElement(settingPageLocator.createApiKeyButton);
    I.waitForVisible(settingPageLocator.verifiedAPIkey, timeout.waitForElement);
    customMethod.clickElement(settingPageLocator.verifiedKeyButton);
    I.see(apiKeyName, settingPageLocator.apikeyLastRow);
  },
  editApiKey(apiKeyEditName) {
    customMethod.clickElement(settingPageLocator.apiKeyButtonEdit);
    customMethod.fieldValue(settingPageLocator.apiKeyField, apiKeyEditName);
    customMethod.clickElement(settingPageLocator.createApiKeyButton);
    I.waitForVisible(
      settingPageLocator.changeApiKeySuccessToast,
      timeout.waitForElement
    );
  },
  deleteApiKey() {
    customMethod.clickElement(settingPageLocator.apiKeyButtonDelete);
    I.waitForElement(settingPageLocator.apiDeleteTitle);
    customMethod.clickElement(settingPageLocator.apiKetVerifiedDeleteButton);
    I.waitForVisible(
      settingPageLocator.deleteApiKeySuccessToast,
      timeout.waitForElement
    );
  },
};
