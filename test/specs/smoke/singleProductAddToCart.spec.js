import { expect } from 'chai';
import HomePage from './../../pageObjects/Home.page';
import Header from './../../pageObjects/components/Header';
import Products from './../../pageObjects/Products.page';
import ShoppingCartModalWindow from "../../pageObjects/components/ShoppingCartModalWindow";
import Utils from "../../helpers/utils";
import productsPageData from './../../data/productsPage.data';

describe('Single Product Add To Cart', () => {
  before('Open Home Page', () => {
    HomePage.open();
  });

  it('Go to Women Products - Verify Women Products page loaded', () => {
    Header.goToWomenProducts();
    expect(Utils.getText(Products.title)).equal(productsPageData.title.women);
  });

  let firstProductName;

  it('Add to cart first product - Verify Cart Modal Window loaded', function () {
    Products.viewProductsList();
    Utils.click(Products.addToCartBtn(0));  // add to cart first product from list with index 0
    expect(Utils.isDisplayed(ShoppingCartModalWindow.cartModalWindow)).to.be.true;
  });

  it('Verify correct product added to cart by product name', () => {
    firstProductName = Products.productName(0).getText(); // text of the first product in the list of products with index 0
    expect(Utils.getText(ShoppingCartModalWindow.productNameText)).equal(firstProductName);
  });

  it('Verify Cart contains 1 product',  () => {
    expect(Utils.getText(ShoppingCartModalWindow.productsCount).replace(/[^0-9]/g, ''))
      .equal('1');
  });
});
