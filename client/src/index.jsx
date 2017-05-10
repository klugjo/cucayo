import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Relay from 'react-relay';
import App from './App.jsx';
import 'semantic-ui-css/semantic.min.css';
import './styles/styles.css';

render(<AppContainer><App/></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./App.jsx', () => {
    const App = require('./App.jsx').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:3000/graphql')
);
