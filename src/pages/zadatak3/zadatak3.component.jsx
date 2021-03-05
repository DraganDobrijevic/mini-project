import { useEffect } from 'react';
import 'ol/ol.css';
import './zadatak3.styles.css';
import { Map, View } from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

import Draw from 'ol/interaction/Draw';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';

const Zadatak3 = () => {
  const drawSource = new VectorSource();
  const drawLayer = new VectorLayer({
    source: drawSource,
  });

  const draw = new Draw({
    source: drawSource,
    type: 'LineString',
  });

  useEffect(() => {
    let map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        drawLayer,
      ],
      view: new View({
        center: fromLonLat([17.19, 44.77]),
        zoom: 4,
      }),
    });

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

  return (
    <div className='open-layers'>
      <h2>OpenLayers</h2>
      <div id='map' className='map'></div>
    </div>
  );
};

export default Zadatak3;
