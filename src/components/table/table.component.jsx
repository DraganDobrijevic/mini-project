import './table.styles.css';

const Table = ({ tableData }) => {
  return (
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
        {tableData.map(
          ({ id, first_name, last_name, email, gender, ip_address }, index) => (
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
  );
};

export default Table;
