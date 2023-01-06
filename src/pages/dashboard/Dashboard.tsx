import React from 'react';
import Navbar from '../../conponents/dashboardComponents/navabar/Navbar';
import Sidebar from '../../conponents/dashboardComponents/sidebar/Sidebar';
import Users from '../../conponents/dashboardComponents/users/Users';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <section>
      <Navbar />

      <section className="dashboard--content">
        <Sidebar />
        <Users />
      </section>
    </section>
  );
};

export default Dashboard;
