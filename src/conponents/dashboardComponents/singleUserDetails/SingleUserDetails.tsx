import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import './singleUserDetails.scss';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { AiOutlineUser, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { tabData } from '../../../data/singleUserInformationTab';
import ShowUserInfo from './ShowUserInfo';
import { useDispatch } from 'react-redux';
import { toggleIsShowSingleUserDetailsOpen } from '../../../features/user/userSlice';
import { CgArrowLongLeft } from 'react-icons/cg';

const formatter = new Intl.NumberFormat('en-US');

type SingleUserDetailsProps = {
  id: string;
  profile: {
    firstName: string;
    lastName: string;
    bvn: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  education: {
    level: string;
    duration: string;
    employmentStatus: string;
    monthlyIncome: [1, 2];
    sector: string;
    officeEmail: string;
    loanRepayment: string;
  };
  email: string;
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  guarantor: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    relationship: string;
  };
};

const SingleUserDetails = () => {
  const [user, setUser] = useState<SingleUserDetailsProps | null>(null);
  const { userId } = useSelector((state: RootState) => state.user);
  const [activeTab, setActiveTab] = useState<string>('General Details');
  console.log(userId);

  const dispatch = useDispatch();

  const getSingleUserDetails = async () => {
    // try {
    //   const { data } = await axios.get(
    //     `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId?.toString()}`
    //   );

    //   setUser(data);
    // } catch (error) {
    //   console.log(error);
    // }
    // @ts-ignore
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(
      (item: SingleUserDetailsProps) => item.id === userId
    );
    setUser(user);
  };

  useEffect(() => {
    getSingleUserDetails();
  }, []);
  console.log(user);
  return (
    <section className="single--user--details--container">
      <button
        className="back--to--users--btn"
        onClick={() => dispatch(toggleIsShowSingleUserDetailsOpen(false))}
      >
        <CgArrowLongLeft />
        Back to Users
      </button>

      <div className="single--user--top">
        <h3>Users Details</h3>

        <div>
          <button className="red">BLACKLIST USER</button>
          <button className="blue">ACTIVATE USER</button>
        </div>
      </div>
      {/* ******************** */}
      {/* ******************** */}
      <div className="single--user--account--description">
        <div className="account--name">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '20px',
            }}
          >
            <div className="user--icon">
              <AiOutlineUser />
            </div>
            <div>
              {' '}
              <h3>
                {user?.profile?.firstName} {user?.profile?.lastName}
              </h3>
              <p>{user?.accountNumber}</p>
            </div>
          </div>
          <div className="user--tier">
            <p>User's Tier</p>
            <AiFillStar color="#E9B200" />
            <AiOutlineStar color="#E9B200" />
            <AiOutlineStar color="#E9B200" />
          </div>
          <div>
            <h3>&#8358;{formatter.format(Number(user?.accountBalance))}</h3>
            <p
              style={{
                fontSize: '14px',
                color: '#545F7D',
                fontFamily: 'Work sans',
              }}
            >
              account number/ bank
            </p>
          </div>
        </div>
        {/* ***************** */}
        <div className="tabs">
          {tabData.map((item, index) => (
            <p
              className={activeTab === item ? 'tab--active' : ''}
              key={index}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="information">
        <section>
          <h3>Personal Information</h3>
          <div className="item">
            <ShowUserInfo
              subTitle="Full name"
              description={`${user?.profile.firstName} ${user?.profile.lastName}`}
            />
            <ShowUserInfo
              subTitle="Phone Number"
              description={`${user?.profile.phoneNumber}`}
            />
            <ShowUserInfo
              subTitle="Email Address"
              description={`${user?.email}`}
            />
            <ShowUserInfo subTitle="BVN" description={`${user?.profile.bvn}`} />
            <ShowUserInfo
              subTitle="Gender"
              description={`${user?.profile.gender}`}
            />

            <ShowUserInfo subTitle="Marital Status" description={`single`} />
            <ShowUserInfo subTitle="Children" description={`none`} />
            <ShowUserInfo
              subTitle="Type Of residency"
              description={`${user?.profile.address}`}
            />
          </div>
        </section>

        <section>
          <h3>Education and Employment</h3>
          <div className="item">
            <ShowUserInfo
              subTitle="Level of Education"
              description={`${user?.education.level}`}
            />
            <ShowUserInfo
              subTitle="Employment Status"
              description={`${user?.education.employmentStatus}`}
            />
            <ShowUserInfo
              subTitle="Sector"
              description={`${user?.education.sector}`}
            />
            <ShowUserInfo
              subTitle="Duration of employment"
              description={`${user?.education.duration}`}
            />
            <ShowUserInfo
              subTitle="Office Email"
              description={`${user?.education.officeEmail}`}
            />

            <div>
              <p>Monthly Income</p>
              <h4>
                &#8358;
                {formatter.format(Number(user?.education.monthlyIncome[0]))} -
                &#8358;
                {formatter.format(Number(user?.education.monthlyIncome[1]))}
              </h4>
            </div>

            <div>
              <p>Loan Repayment</p>
              <h4>
                &#8358;{formatter.format(Number(user?.education.loanRepayment))}
              </h4>
            </div>
          </div>
        </section>

        <section>
          <h3>Socials</h3>
          <div className="item">
            <ShowUserInfo
              subTitle="twitter"
              description={`${user?.socials.twitter}`}
            />
            <ShowUserInfo
              subTitle="facebook"
              description={`${user?.socials.facebook}`}
            />
            <ShowUserInfo
              subTitle="instagram"
              description={`${user?.socials.instagram}`}
            />
          </div>
        </section>

        <section>
          <h3>Guarantor</h3>
          <div className="item">
            <ShowUserInfo
              subTitle="fullname"
              description={`${user?.guarantor.firstName} ${user?.guarantor.lastName}`}
            />
            <ShowUserInfo
              subTitle="phone number"
              description={`${user?.guarantor.phoneNumber}`}
            />
            <ShowUserInfo
              subTitle="Email"
              description={`${user?.guarantor.email || ''}`}
            />
            <ShowUserInfo
              subTitle="Relationship"
              description={`${user?.guarantor.relationship || ''}`}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default SingleUserDetails;
