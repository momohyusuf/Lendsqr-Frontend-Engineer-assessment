import React from 'react';
import { userHeaderData } from '../../../data/userheaderData';

const UsersHeader = () => {
  return (
    <section>
      <p
        style={{
          fontWeight: '500',
          fontSize: '24px',
          lineHeight: '28px',
          color: '#213F7D',
          marginTop: '60px',
        }}
      >
        <strong>Users</strong>
      </p>
      <div className="user--statistics--container">
        {userHeaderData.map((item, index) => (
          <div className="user--statistics--card" key={index}>
            <div
              style={{
                color: item.color,
                backgroundColor: item.bgColor,
              }}
              className="user--statistics--card--icon"
            >
              {item.icon}
            </div>
            <p>{item.text}</p>
            <h3>{item.number}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsersHeader;
