import React, {Component} from 'react';
import Link from 'next/link';
import {getMenuService} from '../../services/menu';
import {css} from 'emotion';

import routes from 'next-routes';

const cssLinks = css`
  display: block;
`;


class Navigation extends React.Component {
  state = {
    loading: false,
    menus: [],
  }

  componentWillMount() {
    this.setState({loading: true});
    
    getMenuService().then((data) => {
      const items = data.filter((value) => value.position === this.props.position);

      this.setState({
        menus: items[0].items,
        loading: false,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? 'Loading Menu...' : null}

        {this.state.menus.map((menuItem) => <Link href={menuItem.url} key={menuItem.id}><a className={cssLinks}>{menuItem.title}</a></Link>)}
      </div>
    );
  }
}

export default Navigation;
