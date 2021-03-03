import './zadatak2.styles.css';
import data from './data.json';
import { useCustomHook } from './useCustomHook';
import './zadatak2.styles.css';

const Zadatak2 = () => {
  const { sortBy, search } = useCustomHook(data);
  console.log(search);
  console.log(sortBy);

  return (
    <div className='custom-hook'>
      <h2>Custom Hook</h2>
      <div className='search-result'>
        <h5>Search Result:</h5>
        {search.map(
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
      <div className='sorted-result'>
        <h5>Sort By:</h5>
        {sortBy.map(
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
