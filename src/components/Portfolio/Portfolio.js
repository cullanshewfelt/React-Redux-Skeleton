import React, {Component, lazy, Suspense} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    return (
      <div className='container dashboard'>
        <section className='section'>
          <div className='columns is-centered'>
            <div className='column is-full has-text-centered'>Contact Me</div>
          </div>
          <div className='columns is-centered'>
            <div className='column is-two-fifths has-text-centered'>Email</div>
            <div className='colum is-one-fifth'> </div>
            <div className='column is-two-fifths has-text-centered'>cs cullan shewfelt</div>
          </div>
          <div className='columns is-centered'>
            <div className='column is-two-fifths has-text-centered'>Github</div>
            <div className='colum is-one-fifth'> </div>
            <div className='column is-two-fifths has-text-centered'>LinkedIn</div>
          </div>
        </section>
      </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
