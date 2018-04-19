import React, {Component} from 'react';
import Routes from '../../config/routes';
import {getMenuService} from '../../services/menu';
import {pageTypes} from '../../utils/pages';
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

        {this.state.menus.map((menuItem) => {
          const type = pageTypes[menuItem.type];
          const parms = {};

          if (menuItem.type !== 'page') {
            parms.type = type;
          }

          if (menuItem.slug !== 'welcome') {
            parms.slug = menuItem.slug;
          }

          return <Routes.Link route="root" params={parms} as={menuItem.url} key={menuItem.id}>
            <a className={cssLinks}>
              {menuItem.title}
            </a>
          </Routes.Link>;
        })}
      </div>
    );
  }
}

export default Navigation;
