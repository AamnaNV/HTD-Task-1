import { Page } from "@playwright/test";
import { LoginAction } from "./loginAction";
import { CartAction } from "./cartaction";

export class AppAction {
    

    constructor (
        private readonly page: Page,
        private readonly loginAction: LoginAction,
        private readonly cartAction: CartAction,
    )
    {}
}