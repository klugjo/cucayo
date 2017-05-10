import React, { Component } from 'react';
import Relay from 'react-relay';

class UserInfo extends Component {
  render() {
    return (
        <div>{this.props.store.user.firstname}</div>
    );
  }
}

export default Relay.createContainer(UserInfo, {
    fragments: {
        store: () => Relay.QL`
            fragment on StoreType {
                user(id: 1) {
                    firstname
                }
            }
        `
    }
});
