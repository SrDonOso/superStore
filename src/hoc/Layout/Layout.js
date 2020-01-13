import React, {Component} from 'react';
import Auxiliar from '../Auxiliar/Auxiliar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

/**
 * Main Layout for the application
 */
class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  /**
   * Show or hides the side drawer when on mobile mode
   */
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  /**
   * toogle the left side navigation drawer
   */
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render() {
    return (
      <Auxiliar>
        <Toolbar drawerToogleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxiliar>
    );
  }
}

export default Layout;
