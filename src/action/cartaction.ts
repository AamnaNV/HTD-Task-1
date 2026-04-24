import { Page } from '@playwright/test';
import { CartPage } from '../page/cartPage';

export class CartAction {

    constructor (private readonly cartPage: CartPage) {

        getCartItemsCount() {
            return this.cartPage.cartItem.count()
        }
    }
}

