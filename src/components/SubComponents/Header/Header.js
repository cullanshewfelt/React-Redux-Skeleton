import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import Loader from '../Loader';
import {initializeData} from '../../../actions/dataActions';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    isHamburgerOpen: false
  }

  toggleMenu = () => {
    this.setState({isHamburgerOpen: !this.state.isHamburgerOpen})
  }

  closeMenu = () => {
    this.state.isHamburgerOpen && this.setState({isHamburgerOpen: !this.state.isHamburgerOpen})
  }

  render(){
    let {isHamburgerOpen} = this.state
    let toggleMenu = this.toggleMenu;
    let closeMenu = this.closeMenu;

  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className='Spac3_Neon'>c s</div>
        <button
          onClick={this.toggleMenu}
          className={`button navbar-burger ${isHamburgerOpen ? 'is-active' : ''}`}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        className={`navbar-menu ${isHamburgerOpen ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <div className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}>
            cullan shewfelt | developer
          </div>
          <NavLink className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} to='/' onClick={closeMenu}>
            home
          </NavLink>
          <NavLink className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} to='/Portfolio' onClick={closeMenu}>
            portfolio
          </NavLink>
          <NavLink className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} to='/Contact' onClick={closeMenu}>
            contact
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
