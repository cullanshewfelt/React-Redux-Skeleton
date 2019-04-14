import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { withRouter } from "react-router";
import Loader from './Loader';

class Footer extends React.Component {
   constructor(props) {
     super(props)
   }
   state = {

   }

   render(){
     return(
       <footer className="footer is-hidden-mobile">
         <div className="content has-text-centered">
           <p>
             <strong>Portfolio</strong> by <a href="https://github.com/cullanshewfelt">Cullan Shewfelt</a>.
           </p>
         </div>
       </footer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
}

export default withRouter(connect(mapStateToProps)(Footer));
