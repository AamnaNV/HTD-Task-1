//fixture - way to prepare and provide objects automatically to our tests
import {test as base} from "@playwright/test"; //take playwright's default test and call it base
import { LoginAction } from "../action/loginAction"; //bringing LoginAction class into this file


type fixture = {
    loginAction: LoginAction; //my fixture will provide an object called loginAction of type LoginAction
}

export const test = base.extend<fixture>({ //creates a new test that includes my custom fixture

    loginAction: async ({ page }, use) => { //use- used to pass teh fixture value to tests
        const loginAction = new LoginAction(page);
        await use(loginAction);
    }
})

export {expect} from "@playwright/test"; //re-export playwright's expect so tests can use it

//async-allows use of await
//the fixture loginAction received page and gives something back using use

