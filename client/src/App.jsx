import React, {Component} from 'react';
import Relay from 'react-relay';
import './App.css';
import Menu from './components/Menu';
import UserInfo from './components/UserInfo';

class AppRoute extends Relay.Route {
  static routeName = 'App';
  static queries = {
    store: (Component) => Relay.QL`
      query AppQuery {
        store {
          ${Component.getFragment('store')}
        }
      }
    `
  };
}

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="ui main text container">
          <Relay.RootContainer
            Component={UserInfo}
            route={new AppRoute()}
          />
        </div>
      </div>
    );
  }
}

export default App;
