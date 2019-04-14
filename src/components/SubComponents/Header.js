import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import Loader from './Loader';
import {initializeData} from '../../actions/dataActions';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    isHamburgeOpen: false
  }

  toggleMenu = () => {
    this.setState({isHamburgeOpen: !this.state.isHamburgeOpen})
  }

  render(){
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink id='main' className="navbar-item" to="/">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28"/>
        </NavLink>
        <NavLink
          onClick={this.toggleMenu}
          className={`button navbar-burger ${this.state.isHamburgeOpen ? 'is-active' : ''}`}
        >
          <span />
          <span />
          <span />
        </NavLink>
      </div>
      <div
        className={`navbar-menu ${this.state.isHamburgeOpen ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <NavLink className="navbar-item is-capitalized" href='/'>
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  )}
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = {
  initializeData
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
