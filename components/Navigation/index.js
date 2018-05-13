import React from 'react';
import {css} from 'emotion';

import Routes from '../../config/routes';

import {getMenuService} from '../../services/menu';
import {pageTypes} from '../../utils/pages';

import {colors} from './../../styles/utils/colors';
import {containers} from './../../styles/utils/shared-variables';
import {resets} from './../../styles/utils/resets';

const localColors = {
  bg: colors.dark,
  text: colors.white,
  navLinkBorderDefault: colors.dark,
  navLinkBorderActive: colors.white,
};

const cssHeader = css`
  display: block;
  height: 100px;
  background-color: ${localColors.bg};
  color: ${localColors.text};
`;

const cssHeaderContainer = css`
  max-widht: ${containers.default}
  margin: 0 auto;
  height: 100%;
`;

const cssNavigation = css`
  display: flex;
  align-items: center;
  jutifiy-content: space-between;
  ${resets.list};
  height: 100%;
`;

const cssNavigationItem = css`
  margin-right: 75px;
  text-align: center;

  &:last-child {
    margin-right: 0;
  }
`;

const cssNavigationLink = css`
  display: block;
  cursor: pointer;
  position: relative;

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
      <div className={`header ${cssHeader}`}>
        <div className={`header__container ${cssHeaderContainer}`}>
          <ul className={`navigation ${cssNavigation}`}>
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
                <li className={`navigation__item ${cssNavigationItem}`}>
                  <a className={`navigation__link ${cssNavigationLink}`}>
                    {menuItem.title}
                  </a>
                </li>
              </Routes.Link>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
