import React from 'react';

import portalHOC from '@components/PortalHOC';
import ToastsList from '@components/ToastsList';
import { positions } from '@constants';
import useToasts from '@hooks/useToasts';

import { ToastContainerWrapper, ToastPositionWrapper } from './styled';

const ToastContainer = () => {
  const { toasts } = useToasts();
  return (
    <ToastContainerWrapper>
      {Object.keys(positions).map((positionName) => (
        <ToastPositionWrapper
          key={positionName}
          data-cy={positions[positionName]}
          position={positions[positionName]}
        >
          <ToastsList toasts={toasts} positionName={positionName} />
        </ToastPositionWrapper>
      ))}
    </ToastContainerWrapper>
  );
};
export default portalHOC(ToastContainer);
