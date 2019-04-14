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

  render(){
    let {isHamburgerOpen} = this.state
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* <div className='AndromedaEclipsis'>c s</div> */}
        {/* <div className='Earth-Orbiter'>c s</div> */}
        {/* <div className='Twolines'>c s</div> */}
        <div className='Spac3_Neon'>c s</div>
        {/* <div className='barcade'>&lt;c s&gt;</div> */}
        {/* <div className='barcade'>(c s)</div> */}
        {/* <div className='Spac3_Tech'>c s</div> */}
        {/* <div className='Gravedigger'>c s</div> */}

        <button
          onClick={this.toggleMenu}
          className={`button navbar-burger ${this.state.isHamburgerOpen ? 'is-active' : ''}`}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        className={`navbar-menu ${this.state.isHamburgerOpen ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <NavLink className={`navbar-item ${this.state.isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} to='/'>
            home
          </NavLink>
          <NavLink className={`navbar-item ${this.state.isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} to='/Portfolio'>
            portfolio
          </NavLink>
          <NavLink className={`navbar-item ${this.state.isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} to='/Contact'>
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
