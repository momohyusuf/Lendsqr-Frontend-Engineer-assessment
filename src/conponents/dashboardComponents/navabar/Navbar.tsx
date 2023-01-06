import React from 'react';
import BrandLogo from '../../brand-logo/BrandLogo';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './navbar.scss';
const Navbar = () => {
  return (
    <nav>
      <section className="nav--items">
        <div
          style={{
            display: 'flex',
          }}
        >
          <BrandLogo imageHeight={20.84} imageWidth={20.63} fontSize="1.8rem" />
          <div
            className="search--bar"
            style={{
              marginLeft: '12rem',
            }}
          >
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for anything"
            />
            <span className="search--icon">
              <AiOutlineSearch />
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '2rem',
            color: '#213F7D',
          }}
        >
          <span
            style={{
              fontFamily: "'Roboto', sans-serif",
              textDecoration: 'underline',
            }}
          >
            Docs
          </span>
          <AiOutlineBell
            style={{
              fontSize: '1.3rem',
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '0.5rem',
            }}
          >
            <img
              src="https://th.bing.com/th/id/OIP.eNb3K1OQH7tGqEXxPrTxWwHaD4?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="user"
              className="user--image"
            />
            <span
              style={{
                fontFamily: "'Work sans', sans-serif",
                fontSize: '1rem',
                fontWeight: '500',
              }}
            >
              Yusuf
            </span>
            <MdOutlineArrowDropDown />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
