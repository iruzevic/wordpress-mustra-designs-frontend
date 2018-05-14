import {css} from 'emotion';

const list = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const heading = css`
  margin: 0;
  padding: 0;
`;

const button = css`
  padding: 0;
  border: 0;
  appearance: none;
  font-family: inherit;

  &:focus {
    outline: none;
  }
`;

export const resets = {
  list,
  heading,
  paragraph: heading,
  button,
};

