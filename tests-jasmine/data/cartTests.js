import { addToCart, cart, loadFromStorage } from '../../data/cart.js';

describe('test suite: addToCart', () => {
  let getItemSpy;
  let setItemSpy;

  beforeEach(() => {
    cart.length = 0; // reset cart
  });

  afterEach(() => {
    // Reset spies to avoid "already been spied upon" error
    if (getItemSpy) getItemSpy.and.callThrough();
    if (setItemSpy) setItemSpy.and.callThrough();
  });

  it('adds an existing product to the cart', () => {
    setItemSpy = spyOn(localStorage, 'setItem');
    getItemSpy = spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });

    loadFromStorage();
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  });

  it('adds a new product to the cart', () => {
    setItemSpy = spyOn(localStorage, 'setItem');
    getItemSpy = spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });

    loadFromStorage();
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  });
});
