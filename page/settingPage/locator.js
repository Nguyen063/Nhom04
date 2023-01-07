module.exports = {
  menuIcon:
    "//button[contains(@class,'mat-focus-indicator')]//span[@class='mat-button-wrapper']//mat-icon[text()='menu']",
  settingTab:
    "//span[contains(@class,'mat-content')]//p[contains(text(),'Thiết lập')]",
  addNewButton:
    "//a[contains(@class,'mat-list-item')]//div//span[text()='Thêm mới']",
  changeCompanyButton:
    "//button[contains(@class,'mat-menu-item') and contains(text(),'Chuyển doanh nghiệp')]",
  profileNameLabel:
    "//a[contains(@class,'mat-list-item')]//div//span[contains(@class,'mat-tooltip-trigger text-sm pl-3 ng-star-inserted')]",
  apiKeyTab:
    "//a[contains(@class,'mat-list-item')]//span[contains(text(),'Api keys')]",
  apiListTitle: "//h4[contains(text(),'API Keys')]",
  addNewApiKey: "//button//span[contains(text(),'Tạo API key')]",
  apiKeyField: "//input[@formcontrolname='name']",
  createApiKeyButton: "//button[@type='submit']",
  verifiedAPIkey:
    "//div//h4[contains(text(),'API Key đã được khởi tạo thành công')]",
  verifiedKeyButton: "//button//span[contains(text(),'Xong')]",
  apikeyLastRow: "//mat-table[@role='grid']//mat-row[last()]",
  apiKeyButtonEdit:
    "//mat-table[@role='grid']//mat-row[last()]//div[@class='actions']//button[@mattooltip='Sửa']",
  apiKeyButtonDelete:
    "//mat-table[@role='grid']//mat-row[last()]//div[@class='actions']//button[@mattooltip='Xóa']",
  changeApiKeySuccessToast:
    "//div[@id='toast-container']//div[contains(text(),'Cập nhật API Key thành công')]",
  apiKetVerifiedDeleteButton: "//button//span[contains(text(),'Đồng ý')]",
  deleteApiKeySuccessToast:
    "//div[@id='toast-container']//div[contains(text(),'Xóa API Key thành công')]",
  apiDeleteTitle: "//div//mat-dialog-container",
};
