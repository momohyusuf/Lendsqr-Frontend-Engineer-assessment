import React from 'react';
import Button from '../formInputs/button/Button';
import Input from '../formInputs/input/Input';
import './filterSearchBar.scss';

const FilterSearchBar = () => {
  const handleInput = () => {
    console.log('hello');
  };
  return (
    <div className="filter--searchBar--container">
      <label htmlFor="organization">Organization</label>
      <select name="organization" id="organization">
        <option value="">Select</option>
      </select>
      <label htmlFor="username">Username</label>
      <Input
        type="text"
        placeholder="User"
        name="user"
        value="user"
        handleInput={handleInput}
        id="username"
      />
      <label htmlFor="email">Email</label>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        value="email"
        handleInput={handleInput}
        id="email"
      />
      <label htmlFor="Date">Date</label>
      <Input
        type="date"
        placeholder="Date"
        name="date"
        value="date"
        handleInput={handleInput}
        id="date"
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <Input
        type="text"
        placeholder="Phone Number"
        name="phoneNumber"
        value="phoneNumber"
        handleInput={handleInput}
        id="phoneNumber"
      />
      <label htmlFor="status">Status</label>
      <select name="statu" id="status">
        <option value="">Select</option>
      </select>
      <div className="filter--btn">
        <Button text="Reset" className="btn--small--white" />
        <Button text="Filter" className="btn--small--blue" />
      </div>
    </div>
  );
};

export default FilterSearchBar;
