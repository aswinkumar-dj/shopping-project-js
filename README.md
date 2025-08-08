# Shopping Project JS

A functional eCommerce web application built using **vanilla JavaScript**, **HTML**, and **CSS**. This project simulates an online shopping experience with product listings, cart management, checkout flow, and order summary.

---

## Preview

A basic Amazon-like interface with cart, checkout, and order tracking functionalities, but named as day-dad. 

---

##  Features

- Product listing 
- Add/remove items from the cart
- Quantity updates and live price totals
- Delivery options and charges
- Order summary with full breakdown
- Currency formatting utility
- Static product data from a mock backend
- Unit tested core logic (Jasmine)

---

##  Project Structure

<pre>
shopping-project-js/
├── backend/
│   └── products.json              # Mock backend product data
│
├── data/
│   ├── cart-oop.js                # OOP-style cart logic (for experimentation)
│   ├── cart.js                    # Main cart logic
│   ├── deliveryOptions.js         # Shipping options and prices
│   ├── orders.js                  # Order data and logic
│   └── products.js                # Product list
│
├── images/                        # Product/UI assets
│
├── scripts/
│   ├── checkout/
│   │   ├── orderSummary.js        # Order page rendering logic
│   │   └── paymentSummary.js      # Payment calculation logic
│   │
│   ├── utils/
│   │   └── money.js               # Currency formatting utility
│   │
│   ├── amazon.js                 # Amazon-like product page script
│   └── checkout.js              # Checkout page script
│
├── styles/
│   ├── pages/                     # Page-specific styles
│   └── shared/                    # Common styles (buttons, layout)
│
├── tests-jasmine/                # Jasmine unit tests (SpecRunner.html)
├── tests-simple/                 # Custom/simple test scripts
│
├── index.html                   # Product listing page
├── checkout.html                 # Shopping cart & checkout page
├── orders.html                   # Final order summary page
└── tracking.html                 # Order tracking view (UI only)
</pre>

---
## tests
tests-jasmine/SpecRunner.html

## start
use index.html

## Live View
https://shopping-project-js.vercel.app/
