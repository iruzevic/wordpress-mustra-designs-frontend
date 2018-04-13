import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {getMenuService} from '../../services/menu';

class Navigation extends React.Component {
  state = {
    loading: false,
    menus: []
  }

  componentWillMount() {
    this.setState({loading: true});
    
    getMenuService().then((data) => {
      const items = data.filter((value) => value['position'] === this.props.position);

      this.setState({
        menus: items[0].items,
        loading: false
      });
    });
  }

  render() {
    return (
      <div>
      {this.state.loading ? 'Loading Menu...' : null}

      {this.state.menus.map((menuItem) => <NavLink exact activeClassName="active" to={menuItem.url} key={menuItem.id}>{menuItem.title}</NavLink>)}
      </div>
    )
  }
}

export default Navigation;
