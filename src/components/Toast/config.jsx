import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { AiFillWarning } from 'react-icons/ai';
import { BiErrorAlt, BiCheck } from 'react-icons/bi';

const toastIcons = {
    info: <FaInfoCircle />,
    warning: <AiFillWarning />,
    error: <BiErrorAlt />,
    success: <BiCheck />,
};
export default toastIcons;
