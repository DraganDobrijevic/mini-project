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

import { toLonLat } from 'ol/proj';
import { toStringHDMS } from 'ol/coordinate';

const Zadatak3 = () => {
  const [selectedValue, setSelectedValue] = useState('None');
  const [showModal, setShowModal] = useState(false);
  const [hdms, setHdms] = useState(null);
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

    if (selectedValue !== 'None') {
      // eslint-disable-next-line
      draw = new Draw({
        source: drawSource,
        type: selectedValue,
      });
      map.addInteraction(draw);

      draw.on('drawend', (e) => {
        if (selectedValue === 'Point') {
          // console.log('point');
          setShowModal(true);

          let coordinate = e.target.sketchCoords_;
          let hdms = toStringHDMS(toLonLat(coordinate));
          setHdms(hdms);
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
    const x = e.target.value;
    setSelectedValue(x);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className='task3'>
      <h2>OpenLayers</h2>
      <ToggleButtons handleChange={changeDrawType} />
      <div ref={mapRef} className='map'></div>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop='static'
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Coordinates</Modal.Title>
        </Modal.Header>
        <Modal.Body>{hdms}</Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Zadatak3;
