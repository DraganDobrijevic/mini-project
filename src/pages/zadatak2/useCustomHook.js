import { useState } from 'react';

export const useCustomHook = (data) => {
  const [sortByData, setSortByData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const search = (key) => {
    const find = data.filter(
      (x) => x.first_name.toLowerCase() === key.toLowerCase()
    );
    // console.log(find);
    setSearchData([...find]);
  };
  // console.log(`Search data: ${ searchData }`);

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
