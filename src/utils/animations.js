import { css } from 'styled-components';

import {
  appearKeyframes,
  disappearKeyframes,
  slideInKeyframes,
  slideOutKeyframes,
} from './keyframes';
import { animationParamsMixin } from './stylesMixins';

export const opacityAnimation = (duration) => css`
  animation-name: ${appearKeyframes}, ${disappearKeyframes};
  ${animationParamsMixin(duration)}
`;

export const slideAnimation = (duration, direction) => css`
  ${animationParamsMixin(duration)}
  animation-name: ${slideInKeyframes(direction)}, ${slideOutKeyframes(
    direction,
  )};
`;
