* shop-shop:
`npm install`
`npm run seed`
`npm start`

* client
 to rest `npm run test`
 `npm install @stripe/stripe-js`

* server
`npm install stripe`

 * [useReducer-Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)
 * [Stripe.js](https://stripe.com/docs/stripe-js)
 * [Stripe-payments](https://stripe.com/)
 * [context](https://reactjs.org/docs/context.html)
 * [useEffect](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)
 * [localForage](https://github.com/localForage/localForage)
 * [Making-Progressive-Web-App](https://create-react-app.dev/docs/making-a-progressive-web-app/)
 * [React Docs on useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
 * [Accept-payments](https://stripe.com/docs/payments/accept-a-payment)
 * []()

   "id": "prod_IusjS8tfBLWJwK",

   curl https://api.stripe.com/v1/prices \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d product=prod_IusjS8tfBLWJwK \
  -d unit_amount=2000 \
  -d currency=usd

"price_1IJ33R2eZvKYlo2Cg9RVFXQ9"

curl https://api.stripe.com/v1/checkout/sessions \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d "payment_method_types[]"=card \
  -d "line_items[][price]"=price_1IJ33R2eZvKYlo2Cg9RVFXQ9 \
  -d "line_items[][quantity]"=1 \
  -d mode=payment \
  -d success_url="https://example.com/success?session_id={CHECKOUT_SESSION_ID}" \
  -d cancel_url="https://example.com/cancel"