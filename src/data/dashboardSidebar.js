import { HiUsers, HiAdjustments } from 'react-icons/hi';
import {
  FaUserTie,
  FaUserCheck,
  FaUserTimes,
  FaUsers,
  FaRegHandshake,
  FaBriefcase,
  FaPiggyBank,
  FaCoins,
  FaUserCog,
  FaClipboardList,
  FaHandHoldingUsd,
} from 'react-icons/fa';
import { MdOutlineAttachMoney, MdOutlineSendToMobile } from 'react-icons/md';
import { GiAlliedStar } from 'react-icons/gi';

import { BsBank2 } from 'react-icons/bs';
import { GrServices } from 'react-icons/gr';

import { RiFilePaper2Fill } from 'react-icons/ri';
import { GoGraph } from 'react-icons/go';
import { GiBeveledStar } from 'react-icons/gi';

export const sidebarData = [
  {
    title: 'CUSTOMERS',
    data: [
      {
        text: 'Users',
        icon: <HiUsers />,
      },
      {
        text: 'Guarantors',
        icon: <FaUsers />,
      },
      {
        text: 'Loans',
        icon: <MdOutlineAttachMoney />,
      },
      {
        text: 'Decision Models',
        icon: <FaRegHandshake />,
      },
      {
        text: 'Savings',
        icon: <FaPiggyBank />,
      },
      {
        text: 'Loan Requests',
        icon: <FaHandHoldingUsd />,
      },
      {
        text: 'Whitelist',
        icon: <FaUserCheck />,
      },
      {
        text: 'Karma',
        icon: <FaUserTimes />,
      },
    ],
  },
  {
    title: 'BUSINESSES',
    data: [
      {
        text: 'Organization',
        icon: <FaBriefcase />,
      },
      {
        text: 'Loan Products',
        icon: <FaHandHoldingUsd />,
      },
      {
        text: 'Savings Products',
        icon: <BsBank2 />,
      },
      {
        text: 'Fees and Charges',
        icon: <FaCoins />,
      },
      {
        text: 'Transactions',
        icon: <MdOutlineSendToMobile />,
      },
      {
        text: 'Services',
        icon: <GrServices />,
      },
      {
        text: 'Service Account',
        icon: <FaUserCog />,
      },
      {
        text: 'Settlement',
        icon: <RiFilePaper2Fill />,
      },
      {
        text: 'Reports',
        icon: <GoGraph />,
      },
    ],
  },
  {
    title: 'SETTINGS',
    data: [
      {
        text: 'Preferences',
        icon: <HiAdjustments />,
      },
      {
        text: 'Fees and Pricing',
        icon: <GiBeveledStar />,
      },
      {
        text: 'Audit Log',
        icon: <FaClipboardList />,
      },
      {
        text: 'System Messages',
        icon: <GiAlliedStar />,
      },
    ],
  },
];
