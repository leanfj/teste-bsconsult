import React, {Component} from 'react';
import logo from '../../img/logo-profite.png'
import './Header.css';


class Header extends Component {
  render(){
    return (
      <div className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <button className="header__bag">
          <i className="fas fa-shopping-bag"></i>
          <span className="bag__quantidade">{this.props.Cart}</span>
        </button>
      </div>
    );
  }
}

export default Header;