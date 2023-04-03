import { keyframes } from 'styled-components';

import { slidePositionMixin } from './stylesMixins';

export const appearKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const disappearKeyframes = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }`;

export const slideInKeyframes = (direction) => keyframes`
  from {
    opacity: 0;
    ${slidePositionMixin(direction, 200)}
}
to {
    opacity: 1;
    ${slidePositionMixin(direction, 0)}
}
`;
export const slideOutKeyframes = (direction) => keyframes`
    from {
      opacity: 1;
      ${slidePositionMixin(direction, 0)}
    }
    to {
      opacity: 0;
      ${slidePositionMixin(direction, 200)}
    }
`;
