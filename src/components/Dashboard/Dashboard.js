import React, {Component, lazy, Suspense} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';

const Dashboard = () => {
  document.title = 'Cullan Shewfelt | Web Developer';
    return (
      <div className="container dashboard">
        <section className="section">
          <div className="columns is-centered">
            <div className="column-1 is-one-quarter">cs cullan shewfelt</div>
            <div className="column-2 is-one-quarter">cs cullan shewfelt</div>
            <div className="column-3 is-one-quarter">cs cullan shewfelt</div>
            <div className="column-4 is-one-quarter">cs cullan shewfelt</div>
          </div>
          <div className="columns is-centered">
            <div className="column-5">cs cullan shewfelt</div>
            <div className="column-6">cs cullan shewfelt</div>
            <div className="column-7">cs cullan shewfelt</div>
            <div className="column-8">cs cullan shewfelt</div>
          </div>
          <div className="columns is-centered">
            <div className="column-1 is-one-quarter">cs cullan shewfelt</div>
            <div className="column-2 is-one-quarter">cs cullan shewfelt</div>
            <div className="column-3 is-one-quarter">cs cullan shewfelt</div>
            <div className="column-4 is-one-quarter">cs cullan shewfelt</div>
          </div>
          <div className="columns is-centered">
            <div className="column-5">cs cullan shewfelt</div>
            <div className="column-6">cs cullan shewfelt</div>
            <div className="column-7">cs cullan shewfelt</div>
            <div className="column-8">cs cullan shewfelt</div>
          </div>
        </section>
      </div>
    )
  }

export default connect()(Dashboard);
