import './zadatak2.styles.css';
import data from './data.json';

import { useEffect, useState } from 'react';
import useCustomHook from './useCustomHook';

import Select from '../../components/select/select.component';
import Table from '../../components/table/table.component';

const Zadatak2 = () => {
  const { sortBy, search, searchData, sortByData } = useCustomHook(data);
  const [searchInput, setSearchInput] = useState('Ambur');
  const [searchType, setSearchType] = useState('first_name');

  useEffect(() => {
    search('Ambur', 'first_name');
    sortBy('first_name');
    // eslint-disable-next-line
  }, []);

  // console.log(searchData);
  // console.log(sortByData);
  // console.log(data);
  const handleChange = (e) => {
    let { value } = e.target;
    setSearchInput(value);
    search(value, searchType);
  };

  const handleChangeSelectSort = (e) => {
    sortBy(e.target.value);
  };

  const handleChangeSelectSearch = (e) => {
    setSearchType(e.target.value);
    setSearchInput('');
  };

  return (
    <div className='task2'>
      <h2>Custom Hook</h2>
      <div className='search'>
        <div className='search-box'>
          <h5>Search result:</h5>
          <div className='search-box-right'>
            <Select
              handleChangeSelect={handleChangeSelectSearch}
              label='Search the data by'
            />
            <input
              className='search-input form-control'
              type='text'
              name='search'
              value={searchInput}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='search-result'>
          <Table tableData={searchData} />
        </div>
      </div>

      <div className='sort'>
        <div className='select-sort'>
          <h5>Sorted data:</h5>
          <Select
            handleChangeSelect={handleChangeSelectSort}
            label='Sort the data by'
          />
        </div>

        <div className='sorted-result'>
          <Table tableData={sortByData} />
        </div>
      </div>
    </div>
  );
};

export default Zadatak2;
