import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
        <div className="ui fixed menu">
            <div className="ui container">
                <a className="header item">Cucayo</a>
                <a className="item">Recipes</a>
                <a className="item">Shopping Lists</a>
            </div>
        </div>
    );
  }
}

export default Menu;
