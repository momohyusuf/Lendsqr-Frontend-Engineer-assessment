import React from 'react';
import './singleUserOptionsCard.scss';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { FiUserCheck, FiUserX } from 'react-icons/fi';
import { toggleIsShowSingleUserDetailsOpen } from '../../features/user/userSlice';
type optionsCardProps = {
  // id: string | undefined;
};

const SingleUserOptionsCard = (props: optionsCardProps) => {
  const dispatch = useDispatch();

  return (
    <div className="options--card">
      <div onClick={() => dispatch(toggleIsShowSingleUserDetailsOpen(true))}>
        <MdOutlineRemoveRedEye />
        <span>View Details</span>
      </div>
      <div>
        <FiUserX />
        <span>Blacklist User</span>
      </div>
      <div>
        <FiUserCheck />
        <span>Activate User</span>
      </div>
    </div>
  );
};

export default SingleUserOptionsCard;
