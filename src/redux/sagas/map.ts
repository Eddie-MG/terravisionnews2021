import { put, StrictEffect, takeEvery } from 'redux-saga/effects';

import { PolygonLayer, IconLayer } from '@deck.gl/layers';
import { Position } from '@deck.gl/core';
import * as mapActions from '../actions/map';
import { Position2D } from 'deck.gl';


export function* polygonLoadSaga(
  action: ReturnType<typeof mapActions.Actions.polygonRequest>,
): Generator<StrictEffect | Promise<boolean>, void> {
  const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, mask: false },
  };

  const europeLayer = new PolygonLayer({
    id: 'real-poly-layer',
    data: action.payload.geoJson,
    getPolygon: d => (d as { type: string; geometry: { type: string; coordinates: Position[][] } }).geometry.coordinates,
    getFillColor: [160, 160, 180, 200],
    getLineColor: [80, 80, 80],
    pickable: true,
    stroked: true,
    filled: true,
    wireframe: true,
  })

  const pointData = [
    { properties: { name: 'Chavignol', story: '5 Cheese Hacks Only the Pros Know' }, coordinates: [2.844560, 47.397411] },
    { properties: { name: 'Milan', story: '11 Hottest Street Light Trends for 2022' }, coordinates: [9.195585, 45.467905] },
    { properties: { name: 'Kyiv', story: '9 Best Practices for Remote Workers in the Shark Industry' }, coordinates: [30.479160, 50.44044] },
    { properties: { name: 'Zurich', story: '10 Ways Investing in Maple Syrup Can Make You a Millionaire' }, coordinates: [8.519453, 47.385598] },
  ]
  const layer = new IconLayer({
    id: 'icon-layer',
    data: pointData,
    pickable: true,
    iconAtlas: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg',
    iconMapping: ICON_MAPPING,
    getIcon: d => 'marker',
    sizeScale: 15,
    getPosition: d => (d as { coordinates: Position2D; exits: number }).coordinates,
    getSize: d => 5,
    getColor: d => [50, 168, 82, 255],
  });

  yield put(
    mapActions.Actions.layerUpdate({ layers: [europeLayer, layer] }),
  );
}

export function* mapSagas(): Generator<StrictEffect, void, unknown> {
  yield takeEvery(mapActions.ActionTypes.POLYGON_REQUEST, polygonLoadSaga);
}
