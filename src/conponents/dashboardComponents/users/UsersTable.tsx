import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineFilterList, MdKeyboardArrowDown } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import FilterSearchBar from '../../filter/FilterSearchBar';
import SingleUserOptionsCard from '../../singleUserOptionCard/SingleUserOptionsCard';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { updateUserId } from '../../../features/user/userSlice';
import { Pagination } from '../../pagination/Pagination';

type ApiData = {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
  // other properties here
};

const status = ['pending', 'inactive', 'blacklisted', 'active'];

const UsersTable = () => {
  const [apiData, setApiData] = useState<ApiData[] | null>(null);
  const [showFilterSearchBar, setShowFilterSearchBar] =
    useState<boolean>(false);
  const { userId, currentPage } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  //  *********************
  // **********************
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users '
      );
      const usersData = JSON.stringify(data);

      // Save the string to local storage
      localStorage.setItem('users', usersData);
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const createDateString = (value: string) => {
    const date = new Date(value);
    const dateString = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    const timeString = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return `${dateString} ${timeString}`;
  };

  const showFilterBar = () => {
    setShowFilterSearchBar((preValue) => !preValue);
  };
  return (
    <section className="table--section">
      <table>
        <thead>
          <tr>
            {[
              'ORGANIZATION',
              'USERNAME',
              'EMAIL',
              'PHONE NUMBER',
              'DATE JOINED',
              'STATUS',
            ].map((item, index) => (
              <th key={index} onClick={showFilterBar}>
                <div>
                  {item}
                  <MdOutlineFilterList
                    style={{
                      fontSize: '15px',
                    }}
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {apiData
            ?.slice((currentPage - 1) * 10, currentPage * 10)
            .map((item) => (
              <tr key={item.id}>
                <td>{item.orgName}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{createDateString(item.createdAt)}</td>
                <td>
                  <span
                    style={{
                      backgroundColor: 'rgba(233, 178, 0, 0.1)',
                      color: '#e9b200',
                      borderRadius: '100px',
                      padding: '10px',
                    }}
                  >
                    pending
                  </span>
                </td>
                <td>
                  <div
                    style={{
                      position: 'relative',
                    }}
                  >
                    <BsThreeDotsVertical
                      onClick={() => dispatch(updateUserId(item.id))}
                      style={{
                        cursor: 'pointer',
                      }}
                    />
                    {userId === item.id && <SingleUserOptionsCard />}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '23px',
        }}
      >
        <div className="showing--number--of--pages">
          <p>Showing</p>
          <div>
            <span>{currentPage * 10}</span>
            <MdKeyboardArrowDown />
          </div>
          <p>Out of 100</p>
        </div>
        <Pagination />
      </div>
      {showFilterSearchBar && <FilterSearchBar />}
    </section>
  );
};

export default UsersTable;
