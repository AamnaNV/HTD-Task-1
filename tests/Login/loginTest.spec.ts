import {test, expect} from "@playwright/test"
import { LoginAction } from "../../src/action/loginAction";
import loginData from "../../src/testdata/login.json";

test.beforeEach(async ({page}) => {
    await page.goto(loginData.baseUrl);
});

test('TC01 - Valid user should login successfully', async ({page}) => {
const loginAction = new LoginAction(page);
await loginAction.login(loginData.validUser.username, loginData.validUser.password);
await expect(page).toHaveTitle(loginData.PageTitle);
await expect(page).toHaveURL(/inventory/);
})

test('TC02 - Loced out user should not be allowed to login', async ({page}) => {
const loginAction = new LoginAction(page);
await loginAction.login(loginData.LockedUser.username, loginData.LockedUser.password);
await expect(page).toHaveTitle(loginData.PageTitle);
const errorMessage = await loginAction.getErrorMessage();
await expect(errorMessage).toHaveText(loginData.LockedUser.errorMessage);
})

test('TC03 - Invalid user should not login', async ({page}) => {
const loginAction = new LoginAction(page);
await loginAction.login(loginData.InvalidUser.username, loginData.InvalidUser.password);
await expect(page).toHaveTitle(loginData.PageTitle);
const errorMessage = await loginAction.getErrorMessage();
await expect(errorMessage).toHaveText(loginData.InvalidUser.errorMessage);
})