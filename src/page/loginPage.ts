//this page stores elements (username, password, button) and organises page structure

import {Page, Locator} from '@playwright/test';

export class LoginPage { //export allows other files to use this class

    //properties
    readonly page: Page; // a readonly variable 'page' with the Type Page (Page is a playwright object)
    readonly usernameInput: Locator; //locators object type point to elements on te page
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {  //special func that runs when object is created/used to initialise values
        
        //stores the browser page inside this class
        this.page = page; //this.page=class variable, page=value passed from outside
        //stores locator     playwright way to find element('type of element, {lable visible to user})
        this.usernameInput = page.getByRole('textbox', {name: 'Username'});
        this.passwordInput = page.getByRole('textbox', {name: 'Password'});
        this.loginButton = page.getByRole('button', {name: 'Login'});
        //uses xpath: find a div with class 'error-message-container error' and inside it find h3
        this.errorMessage = page.locator('//div[@class="error-message-container error"]/h3');

    }



}