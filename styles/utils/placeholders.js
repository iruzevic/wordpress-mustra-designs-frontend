import {css} from 'emotion';

import {containers, sharedVariables} from './shared-variables';

const siteContainer = css`
  max-width: ${containers.default}px;
  padding-left: ${sharedVariables.baseContentPadding}px;
  padding-right: ${sharedVariables.baseContentPadding}px;
  margin: 0 auto;
`;

const siteContainerLarge = css`
  max-width: ${containers.large}px;
  padding-left: ${sharedVariables.baseContentPadding}px;
  padding-right: ${sharedVariables.baseContentPadding}px;
  margin: 0 auto;
`;

export const placeholders = {
  siteContainer,
  siteContainerLarge,
};
