import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { withRouter } from "react-router";
import Loader from '../Loader';
import ReactSVG from 'react-svg';
import SVG from 'react-inlinesvg';
// const githubIcon = require('svg-inline-loader?classPrefix=my-prefix-!./images/icons/github_fold.svg');


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
           <a href='https://www.linkedin.com'>
             <img className='linkedin-icon'
               src={require("./images/icons/linkedin_fold.png")}
             />
           </a>
           <a href='https://www.github.com'>
             <img className='github-icon'
               src={require("./images/icons/github_fold.png")}
             />
           </a>

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
