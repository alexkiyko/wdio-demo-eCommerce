import { expect } from 'chai';
import HomePage from './../../pageObjects/Home.page';
import Header from './../../pageObjects/components/Header';
import Products from './../../pageObjects/Products.page';
import ShoppingCartModalWindow from "../../pageObjects/components/ShoppingCartModalWindow";
import Utils from "../../helpers/utils";

describe('Single Product Add To Cart', () => {
  before('Open Home Page', () => {
    HomePage.open();
  });

  before('Go to Women Products and add to cart first product', () => {
    Utils.click(Header.menuWomenProductsBtn);
    Utils.click(Products.viewListBtn);
    Utils.click(Products.addToCartBtn(0));  // add to cart first product from list with index 0
    expect(Utils.getText(Products.headerText)).equal('WOMEN ');
  });

  let productName;

  it('Verify correct product added to cart by product name', () => {
    productName = Products.productName(0).getText(); // text of the first product in the list of products with index 0
    expect(Utils.getText(ShoppingCartModalWindow.productNameText)).equal(productName);
  });

  it('Verify success message displayed', () => {
    expect(Utils.getText(ShoppingCartModalWindow.productAddedText))
      .equal('Product successfully added to your shopping cart');
  });

  it('Verify Cart contains 1 product',  () => {
    expect(Utils.getText(ShoppingCartModalWindow.productsCount).replace(/[^0-9]/g, '')).equal('1');
  });
});
