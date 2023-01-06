import React, { useState } from 'react';
import BrandLogo from '../../conponents/brand-logo/BrandLogo';
import heroImage from '../../assets/images/pablo-sign-in.svg';
import './login.scss';

import Input from '../../conponents/formInputs/input/Input';
import Button from '../../conponents/formInputs/button/Button';
import { updateAdmin } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = () => {
    dispatch(updateAdmin(formData.email));
    if (formData.email && formData.password) {
      navigate('/admin');
    }
  };
  return (
    <section className="login--container">
      <BrandLogo imageHeight={25} imageWidth={24.75} fontSize="2rem" />

      {/* ********************** */}
      <div>
        <img src={heroImage} alt="hero" className="hero--image" />

        <div>
          <header>
            <h2>Welcome!</h2>
            <p>Enter details to login</p>
          </header>
          <form>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              handleInput={handleInput}
              value={formData.email}
              id="email"
              required={true}
            />
            <div
              style={{
                position: 'relative',
                width: '477px',
                maxWidth: '100%',
              }}
            >
              <Input
                type="password"
                placeholder="Password"
                name="password"
                handleInput={handleInput}
                value={formData.password}
                id="password"
                required={true}
              />
              <p className="show--password">SHOW</p>
            </div>

            <p className="forgot--password">FORGOT PASSWORD?</p>

            <Button
              text="LOG IN"
              className="btn--light--blue"
              handleSubmit={handleSubmit}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
