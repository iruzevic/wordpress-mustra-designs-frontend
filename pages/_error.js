import React from 'react';
import {css} from 'emotion';

const title = css`
  color: red;
`;

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className={title}>Error</h1>
      </div>
    );
  }
}
