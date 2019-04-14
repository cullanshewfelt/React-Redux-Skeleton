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
      <section class="section">
        <div class="columns">
          <div class="column">1</div>
          <div class="column">2</div>
          <div class="column">3</div>
          <div class="column">4</div>
          <div class="column">5</div>
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
