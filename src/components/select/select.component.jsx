import './select.styles.css';

const Select = ({ handleChangeSelect, label }) => {
  return (
    <div>
      <label className='label'>{label}</label>
      <select
        className='custom-select'
        name='data'
        id='data'
        onChange={handleChangeSelect}
      >
        <option className='form-check' value='first_name'>
          First Name
        </option>
        <option className='form-check' value='last_name'>
          Last Name
        </option>
        <option className='form-check' value='id'>
          ID
        </option>
      </select>
    </div>
  );
};

export default Select;
