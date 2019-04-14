import React, {Component, lazy, Suspense} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from './SubComponents/Loader';
import {initializeData} from '../actions/dataActions';

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
      <section className="section">
        <div className="columns">
          <div className="column">1</div>
          <div className="column">2</div>
          <div className="column">3</div>
          <div className="column">4</div>
          <div className="column">5</div>
        </div>
      </section>
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
