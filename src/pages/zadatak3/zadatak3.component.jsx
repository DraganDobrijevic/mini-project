import { useEffect } from 'react';
import 'ol/ol.css';
import './zadatak3.styles.css';
import { Map, View } from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

import Draw from 'ol/interaction/Draw';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer, Group } from 'ol/layer';
import { XYZ } from 'ol/source';

import ToggleButtons from '../../components/toggle-buttons/toggle-buttons.component';

const Zadatak3 = () => {
  console.log('refres');

  useEffect(() => {
    const drawSource = new VectorSource();
    const drawLayer = new VectorLayer({
      source: drawSource,
    });

    const draw = new Draw({
      source: drawSource,
      type: 'LineString',
    });

    let map = new Map({
      target: 'map',
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
      layers: [openStreetMapStandard, stamenTerrain, drawLayer],
    });

    map.addLayer(layerGroup);

    map.addInteraction(draw);

    draw.on('drawend', () => {
      console.log('op');
    });

    return () => {
      let deleteMap = document.getElementById('map');
      if (deleteMap) {
        deleteMap.innerHTML = '';
      }
    };
  }, []);

  const updateRadio = () => {};

  return (
    <div className='open-layers'>
      <h2>OpenLayers</h2>
      <div id='map' className='map'></div>
      <ToggleButtons />
      {/* <div className='radio-form'>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            id='map1'
            name='map'
            value='option1'
            onChange={updateRadio}
            checked
          />
          <label className='form-check-label' htmlFor='map1'>
            First radio
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            id='map2'
            name='map'
            value='option2'
            onChange={updateRadio}
          />
          <label className='form-check-label' htmlFor='map2'>
            Second radio
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            id='map3'
            name='map'
            value='option3'
            onChange={updateRadio}
          />
          <label className='form-check-label' htmlFor='map3'>
            Third radio
          </label>
        </div>
      </div> */}
    </div>
  );
};

export default Zadatak3;
