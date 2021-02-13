import { createStore } from 'redux';
import reducer from './reducers';

export default createStore(reducer);
// import ApolloClient from 'apollo-boost';
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { reducer, initialState } from './reducers';
// // import { InMemoryCache } from "react-apollo";
// import { InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//     request: (operation) => {
//         const token = localStorage.getItem('id_token')
//         operation.setContext({
//             headers: {
//                 authorization: token ? `Bearer ${token}` : ''
//             }
//         })
//     },
//     uri: '/graphql',
//     cache: new InMemoryCache(),
// })

// export const store = createStore(
//     combineReducers({
//         ...reducer,
//         apollo: reducer(),
//     }),
//     initialState, // initial state
//     compose(
//         applyMiddleware(client.middleware()),
//         // If you are using the devToolsExtension, you can add it here also
//         (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
//     )
// );

// export default createStore;