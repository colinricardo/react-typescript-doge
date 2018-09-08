import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body, html {
    margin:0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: sans-serif;
  }
`;

/**
 * `as HTMLElement` is a type assertion, i.e. casting.
 *
 * The reason we need to do so in this case is that getElementById's return type is HTMLElement | null.
 * Put simply, getElementById returns null when it can't find an element with a given id.
 * We're assuming that getElementById will actually succeed, so we need convince TypeScript of that using the as syntax.
 *
 * TypeScript also has a trailing "bang" syntax (`!`), which removes null and undefined from the prior expression.
 * So we could have written `document.getElementById('root')!`, but in this case we wanted to be a bit more explicit.
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
