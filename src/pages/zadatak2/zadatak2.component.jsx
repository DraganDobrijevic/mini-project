import { useEffect, useState } from 'react';
import './zadatak2.styles.css';
import data from './data.json';
import { useCustomHook } from './useCustomHook';

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
      <div className='search'>
        <div className='search-box'>
          <h5>Search result:</h5>
          <div>
            <label>Search the data by name:</label>
            <input
              className='search-input'
              type='text'
              name='search'
              value={searchInput}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='search-result'>
          <table className='table'>
            <thead className='thead-light'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>ID</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Gender</th>
                <th scope='col'>IP Address</th>
              </tr>
            </thead>
            <tbody>
              {searchData.map(
                (
                  { id, first_name, last_name, email, gender, ip_address },
                  index
                ) => (
                  <tr key={id}>
                    <th scope='row'>{index + 1}.</th>
                    <td>{id}</td>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td> {ip_address}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className='sort'>
        <div className='select-sort'>
          <h5>Sorted data:</h5>
          <div>
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
          </div>
        </div>

        <div className='sorted-result'>
          <table className='table'>
            <thead className='thead-light'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>ID</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Gender</th>
                <th scope='col'>IP Address</th>
              </tr>
            </thead>
            <tbody>
              {sortByData.map(
                (
                  { id, first_name, last_name, email, gender, ip_address },
                  index
                ) => (
                  <tr key={id}>
                    <th scope='row'>{index + 1}.</th>
                    <td>{id}</td>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td> {ip_address}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Zadatak2;
