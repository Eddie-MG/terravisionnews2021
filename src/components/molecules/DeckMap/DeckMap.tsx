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
  latitude: 51.5072,
  longitude: 0.1276,
  zoom: 10,
  pitch: 0,
  bearing: 0
};

export const DeckMap: FC = () => {
  const statePolygons = useSelector((state: GlobalState) => state.map.polygons);

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      views={[new MapView({ width: '100%', height: '44%' })]}
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  )
}