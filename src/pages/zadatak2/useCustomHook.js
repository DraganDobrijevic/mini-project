import { useState } from 'react';

const useCustomHook = (data) => {
  const [searchData, setSearchData] = useState([]);
  const [sortByData, setSortByData] = useState([]);

  const search = (value, type) => {
    if (type === 'first_name') {
      const find = data.filter(
        (x) => x.first_name.toLowerCase() === value.toLowerCase()
      );
      setSearchData([...find]);
    } else if (type === 'last_name') {
      const find = data.filter(
        (x) => x.last_name.toLowerCase() === value.toLowerCase()
      );
      setSearchData([...find]);
    } else {
      const find = data.filter((x) => x.id === Number(value));
      setSearchData([...find]);
    }
  };

  // console.log(`Search data: ${JSON.stringify(searchData)}`);
  // console.log(`Sorted data: ${JSON.stringify(sortByData)}`);

  const sortBy = (type) => {
    const types = {
      first_name: 'first_name',
      last_name: 'last_name',
      id: 'id',
    };

    const sortProperty = types[type];

    if (sortProperty === 'id') {
      const sorted = data.sort((a, b) => a.id - b.id);
      setSortByData([...sorted]);
    } else {
      const sorted = data.sort((a, b) => {
        const first = a[sortProperty].toUpperCase();
        const second = b[sortProperty].toUpperCase();

        if (first > second) return 1;
        if (first < second) return -1;
        return 0;
      });
      setSortByData([...sorted]);
    }
  };

  return { sortBy, search, searchData, sortByData };
};

export default useCustomHook;
