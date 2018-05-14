import React from 'react';
import {css} from 'emotion';

import Routes from '../../config/routes';

import {getMenuService} from '../../services/menu';
import {pageTypes} from '../../utils/pages';

import {colors} from './../../styles/utils/colors';
import {resets} from './../../styles/utils/resets';

const localColors = {
  navLinkBorderDefault: colors.dark,
  navLinkBorderActive: colors.white,
};

const cssList = css`
  display: flex;
  align-items: center;
  jutifiy-content: space-between;
  ${resets.list};
  height: 100%;
`;

const cssItem = css`
  margin-right: 75px;
  text-align: center;

  &:last-child {
    margin-right: 0;
  }
`;

const cssLink = css`
  display: block;
  cursor: pointer;
  position: relative;
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background-color: ${localColors.navLinkBorderDefault};
  }

  &:hover::after {
    background-color: ${localColors.navLinkBorderActive};
  }
`;

const cssLinkBtn = css`
  ${resets.button};
`;


export class Navigation extends React.Component {
  state = {
    loading: false,
    menus: [],
  }

  componentDidMount() {
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
      <ul className={`navigation ${cssList}`}>
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
            <li className={`navigation__item ${cssItem}`}>
              <a className={`navigation__link ${cssLink} ${(menuItem.classes === 'btn') ? cssLinkBtn : ''}`}>
                {menuItem.title}
              </a>
            </li>
          </Routes.Link>;
        })}
      </ul>
    );
  }
}
