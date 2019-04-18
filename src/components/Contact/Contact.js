import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';

const Contact = () => {
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
  )
}

export default connect()(Contact);
