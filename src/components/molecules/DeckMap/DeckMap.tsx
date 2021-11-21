import React, { FC } from 'react';
import { useSelector } from 'react-redux'
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import { GlobalState } from '../../../redux';
import { MapView } from '@deck.gl/core';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZWRkaWV0aGVvZG8iLCJhIjoiY2t3ODF1dGdzMGR6bjMwcW1oYjVjemNlMSJ9.oFlydrNQv8qRVPce7ez7Aw';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 36.884168,
  latitude: 69.848866,
  zoom: 1.8,
  pitch: 0,
  bearing: 0
};

export const DeckMap: FC = () => {
  const statePolygons = useSelector((state: GlobalState) => state.map.polygons);
  const mapLayers = useSelector((state: GlobalState) => state.map.layers);

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      views={[new MapView({ width: '100%', height: '44%' })]}
      layers={mapLayers}
      getTooltip={({ object }) => {
        if (object) {
          const typedObj = (object as unknown) as {
            properties: { scalerank: number; sovereignt: string; level: number; type: string; geounit: string; subunit: string; name: string; name_long: string; economy: string; continent: string; pop_est: number; gdp_md_est: number; income_grp: string }
          };
          return `Name: ${typedObj.properties.name_long}\nContinent: ${typedObj.properties.continent}\nGDP: ${typedObj.properties.gdp_md_est}`;
        } else {
          return null;
        }
      }}
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  )
}