//fixture - way to prepare and provide objects automatically to our tests
import {test as base, expect} from "@playwright/test"; //take playwright's default test and call it base
import { LoginAction } from "../action/loginAction"; //bringing LoginAction class into this file
import { LoginPage } from "../page/loginPage";

type fixtures = {
    loginAction: LoginAction; //my fixture will provide an object called loginAction of type LoginAction
    loginPage: LoginPage;
}

export const test = base.extend<fixtures>({ //creates a new test that includes my custom fixture

    loginAction: async ({ page }, use) => { //use- used to pass teh fixture value to tests
        const loginAction = new LoginAction(page);
        await use(loginAction);
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
})

export {expect} from "@playwright/test"; //re-export playwright's expect so tests can use it

//async-allows use of await
//the fixture loginAction received page and gives something back using use

