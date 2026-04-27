import {Locator, Page} from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly signupLoginLink: Locator;
    readonly signupName: Locator;
    readonly signupEmail: Locator;
    readonly signupButton: Locator;
    readonly title: Locator;
    readonly username: Locator;
    readonly useremail: Locator;
    readonly password: Locator;
    readonly date: Locator;
    readonly month: Locator;
    readonly year: Locator;

    constructor (page: Page) {
        this.page = page;
        this.signupLoginLink = page.getByRole('link', {name: 'Sign Up / Login'});
        this.signupName = page.getByRole('textbox', {name: 'Name'});
        this.signupEmail = page.locator('//*[data-qa="signup-email"]');
        this.signupButton = page.getByRole('button', {name: 'Sign Up'});
        this.signupButton = page.getByRole('button', {name: 'Sign Up'});
        this.title = page.getByRole('radio', {name: 'Mr'});
        this.username = page.getByLabel('name');
        this.useremail = page.getByLabel('email');
        this.password = page.getByLabel('password');
        this.date = page.locator('#days')
        this.month = page.locator('//select[data-qa="months"]');   
        this.year = page.locator('[name="years]');

    }

}