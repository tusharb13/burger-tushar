import React from "react";
import Auxilliary from "../../hoc/Auxilliary";
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SiderDrawer';
import {connect } from 'react-redux';

const layout = (props) => (

  <Auxilliary>
    <Toolbar isAuth={props.isAuthenticated}></Toolbar>
    <SideDrawer></SideDrawer>
    <main className={classes.Content}>{props.children}</main>
  </Auxilliary>
);

const mapStateToProps = state => {
  return{
    isAuthenticated :  state.auth.token !== null 
  }
}

export default connect(mapStateToProps)(layout);
