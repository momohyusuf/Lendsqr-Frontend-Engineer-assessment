import React, { useState } from 'react';
import { sidebarData } from '../../../data/dashboardSidebar';
import './sidebar.scss';
import { FaBriefcase } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BiLogIn } from 'react-icons/bi';

type selectedTabProps = {
  selectedTab?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Sidebar = () => {
  const [activeSidebarTab, setActiveSidebarTab] = useState<string>('Users');

  const selectedTab = (event: React.MouseEvent<HTMLElement>) => {
    setActiveSidebarTab(event.currentTarget.innerText);
  };
  return (
    <aside>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '10px',
            paddingBottom: '52px',
            paddingLeft: '30px',
            paddingTop: '45px',
          }}
        >
          {' '}
          <FaBriefcase />
          <p>Switch Organization </p>
          <MdKeyboardArrowDown />
        </div>
      </div>

      <div
        style={{
          paddingLeft: '30px',
        }}
      >
        <p>Dashboard</p>
      </div>
      <div
        style={{
          borderBottom: '1px solid rgba(33, 63, 125, 0.1)',
          marginBottom: '20px',
          paddingBottom: '71px',
        }}
      >
        {sidebarData.map((section, index) => (
          <div key={index}>
            <p className="section--heading">{section.title}</p>

            {section.data.map((item, index) => (
              <div
                className={`section--link ${
                  activeSidebarTab === item.text && 'activeSidebarTab'
                }`}
                key={index}
              >
                {item.icon}
                <span onClick={selectedTab}>{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="section--link">
        <BiLogIn />
        <span>Logout</span>
      </div>
      <p className="section--link">
        <span
          style={{
            fontSize: '14px',
            marginTop: '40px',
            marginBottom: '30px',
          }}
        >
          v.1.2.0
        </span>
      </p>
    </aside>
  );
};

export default Sidebar;
