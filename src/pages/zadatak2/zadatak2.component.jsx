import { useEffect, useState } from 'react';
import './zadatak2.styles.css';
import data from './data.json';
import { useCustomHook } from './useCustomHook';
import FormInput from '../../components/form-input/form-input.component';

const Zadatak2 = () => {
  const { sortBy, search, searchData, sortByData } = useCustomHook(data);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    search('Ambur');
    sortBy('first_name');
  }, []);
  // sortBy('first_name');

  // console.log(searchData);
  // console.log(sortByData);
  // console.log(data);
  const handleChange = (e) => {
    let { value } = e.target;
    setSearchInput(value);
    search(value);
  };

  return (
    <div className='custom-hook'>
      <h2>Custom Hook</h2>
      <FormInput
        type='text'
        name='search'
        value={searchInput}
        label='Search the data by name'
        onChange={handleChange}
        required
      />
      <div className='search-result'>
        <h5>Search Result:</h5>
        {searchData.map(
          ({ id, first_name, last_name, email, gender, ip_address }) => (
            <div key={id}>
              <h6>ID: {id}</h6>
              <h6>First Name: {first_name}</h6>
              <h6>Last Name: {last_name}</h6>
              <h6>Email: {email}</h6>
              <h6>Gender: {gender}</h6>
              <h6>IP Address: {ip_address}</h6>
            </div>
          )
        )}
      </div>

      <label>Sort the data by:</label>
      <select
        className=''
        name='data'
        id='data'
        onChange={(e) => sortBy(e.target.value)}
      >
        <option value='first_name'>First Name</option>
        <option value='last_name'>Last Name</option>
        <option value='id'>ID</option>
      </select>

      <div className='sorted-result'>
        <h5>Sorted data:</h5>
        {sortByData.map(
          ({ id, first_name, last_name, email, gender, ip_address }) => (
            <div key={id}>
              <span>ID: {id}, </span>
              <span>First Name: {first_name}, </span>
              <span>Last Name: {last_name}, </span>
              <span>Email: {email}, </span>
              <span>Gender: {gender}, </span>
              <span>IP Address: {ip_address} </span>
              <hr />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Zadatak2;
