import React from 'react';
import { AiFillWarning } from 'react-icons/ai';
import { BiCheck, BiErrorAlt } from 'react-icons/bi';
import { FaInfoCircle } from 'react-icons/fa';

const toastIcons = {
  info: <FaInfoCircle />,
  warning: <AiFillWarning />,
  error: <BiErrorAlt />,
  success: <BiCheck />,
};
export default toastIcons;
