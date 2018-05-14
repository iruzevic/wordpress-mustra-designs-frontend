export const sharedVariables = {
  baseFontFamily: 'Source Sans Pro, sans-serif',
  baseContentPadding: 15,
  baseContentFullWidth: 1005,
  baseContentLargeFullWidth: 1200,
};


export const fontSizes = {
  gianter: '64px',
  giant: '52px',
  huge: '36px',
  big: '30px',
  large: '24px',
  default: '20px',
  medium: '18px',
  small: '16px',
};

export const containers = {
  default: sharedVariables.baseContentFullWidth + (sharedVariables.baseContentPadding * 2),
  large: sharedVariables.baseContentLargeFullWidth + (sharedVariables.baseContentPadding * 2),
};
