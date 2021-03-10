import './toggle-buttons.styles.css';
import { useState } from 'react';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ToggleButtons = ({ handleChange }) => {
  const [radioValue, setRadioValue] = useState('None');

  const radios = [
    { name: 'None', value: 'None' },
    { name: 'Point', value: 'Point' },
    { name: 'Line', value: 'LineString' },
    { name: 'Polygon', value: 'Polygon' },
  ];

  return (
    <>
      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type='radio'
            variant='secondary'
            name='radio'
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {
              handleChange(e);
              setRadioValue(e.target.value);
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
};

export default ToggleButtons;
