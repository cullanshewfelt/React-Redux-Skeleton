import React, {Component, lazy, Suspense} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    return (
      <div className="container">
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
