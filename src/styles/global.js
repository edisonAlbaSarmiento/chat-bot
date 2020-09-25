import { css } from 'styled-components';

export const size = {
  small: 540,
  medium: 768,
}

export const resize = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {});