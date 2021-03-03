import { useState, useEffect } from 'react';

export const useCustomHook = (data) => {
  const [sortBy, setSortByData] = useState([]);
  const [search, setSearchData] = useState([]);

  const searchFnc = (key) => {
    const find = data.filter((x) => x.first_name === key);
    console.log(find);
    setSearchData([...search, ...find]);
  };

  const sortByFnc = (type) => {
    const types = {
      first_name: 'first_name',
      last_name: 'last_name',
    };

    // pokusati na ovaj nacin, ali ne u hook nego u zadatku2
    // data = JSON.parse(JSON.stringify(data[0]));

    console.log(data);

    console.log(type);

    const sortProperty = types[type];
    const sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);
    console.log(sorted);
    setSortByData([...sorted]);
  };

  useEffect(() => {
    searchFnc('Leola');
    sortByFnc('first_name');
  }, [data]);

  return { sortBy, search };
};
