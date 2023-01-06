import React, { useState } from 'react';
import UsersHeader from './UsersHeader';
import UsersTable from './UsersTable';
import './user.scss';
import SingleUserDetails from '../singleUserDetails/SingleUserDetails';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const Users = () => {
  const { isShowSingleUserDetailsOpen } = useSelector(
    (state: RootState) => state.user
  );
  return (
    <section
      style={{
        width: '1037px',
        maxWidth: '100%',
      }}
    >
      {isShowSingleUserDetailsOpen ? (
        <SingleUserDetails />
      ) : (
        <>
          <UsersHeader />
          <UsersTable />
        </>
      )}
    </section>
  );
};

export default Users;
