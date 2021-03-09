import { useEffect, useState, useRef } from 'react';
import 'ol/ol.css';
import './zadatak3.styles.css';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';

import Draw from 'ol/interaction/Draw';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer, Group } from 'ol/layer';
import { XYZ } from 'ol/source';

import ToggleButtons from '../../components/toggle-buttons/toggle-buttons.component';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Zadatak3 = () => {
  const [selectedValue, setSelectedValue] = useState('None');
  const [showModal, setShowModal] = useState(false);
  const [map, setMap] = useState(null);
  const mapRef = useRef();

  let draw = null;

  useEffect(() => {
    const mapObject = new Map({
      target: mapRef.current,
      view: new View({
        center: fromLonLat([17.19, 44.77]),
        zoom: 4,
      }),
    });

    const openStreetMapStandard = new TileLayer({
      source: new OSM(),
      visible: true,
      title: 'OSMStandard',
    });

    const stamenTerrain = new TileLayer({
      source: new XYZ({
        url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
      }),
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      visible: false,
      title: 'StamenTerrain',
    });

    const layerGroup = new Group({
      layers: [openStreetMapStandard, stamenTerrain],
    });

    mapObject.addLayer(layerGroup);
    setMap(mapObject);

    return () => {
      mapObject.setTarget(undefined);
    };
  }, []);

  useEffect(() => {
    const drawSource = new VectorSource();
    const drawLayer = new VectorLayer({
      source: drawSource,
    });
    if (map) {
      map.addLayer(drawLayer);
    }
    console.log('sporni effect');
    if (selectedValue !== 'None') {
      draw = new Draw({
        source: drawSource,
        type: selectedValue,
      });
      map.addInteraction(draw);

      draw.on('drawend', (e) => {
        console.log('drawend');
        console.log('End selected value: ', selectedValue);
        if (selectedValue === 'Point') {
          console.log('point');
          console.log(showModal);
          setShowModal(true);
        }
      });
    }

    return () => {
      if (map) {
        map.removeInteraction(draw);
      }
    };
  }, [selectedValue]);

  const changeDrawType = (e) => {
    map.removeInteraction(draw);
    console.log('e.targ.val unutar changeDrawType', e.target.value);
    const x = e.target.value;
    setSelectedValue(x);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className='open-layers'>
      <h2>OpenLayers</h2>
      <div ref={mapRef} className='map'></div>
      <ToggleButtons handleChange={changeDrawType} />
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop='static'
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Press escape key to close.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Zadatak3;
