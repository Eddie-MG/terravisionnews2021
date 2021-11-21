import { put, StrictEffect, takeEvery } from 'redux-saga/effects';


// import { CartoSQLLayer, colorContinuous } from '@deck.gl/carto';
import { PolygonLayer } from '@deck.gl/layers';
import { Position } from '@deck.gl/core';
import * as mapActions from '../actions/map';
import * as initActions from '../actions/init';
import { Polygon } from '../../types/entity/Map';


export function* polygonLoadSaga(
  action: ReturnType<typeof mapActions.Actions.polygonRequest>,
): Generator<StrictEffect | Promise<boolean>, void> {
  const polygons: Polygon = { rings: [[[654, 42], [344, 2], [334, 57], [76, 24], [654, 42]], [[1, 42], [4, 2], [34, 57], [1, 42]]] }

  // const polygonLayer = new PolygonLayer({
  //   id: 'demo-poly-layer',
  //   data: [{ contour: [[-1.446548, 51.440850], [25.470827, 52.239801], [28.678885, 38.636820], [-5.713317, 38.753526], [-1.446548, 51.440850]] }],
  //   getPolygon: d => (d as { contour: Position[] }).contour,
  //   getFillColor: [160, 160, 180, 200],
  //   pickable: true,
  //   stroked: true,
  //   filled: true,
  //   wireframe: true,
  // })

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

  // const data = [
  //   {
  //     // Simple polygon (array of coords)
  //     contour: [[-122.4, 37.7], [-122.4, 37.8], [-122.5, 37.8], [-122.5, 37.7], [-122.4, 37.7]],
  //     zipcode: 94107,
  //     population: 26599,
  //     area: 6.11
  //   },
  //   {
  //     // Complex polygon with holes (array of rings)
  //     contour: [
  //       [[-122.4, 37.7], [-122.4, 37.8], [-122.5, 37.8], [-122.5, 37.7], [-122.4, 37.7]],
  //       [[-122.45, 37.73], [-122.47, 37.76], [-122.47, 37.71], [-122.45, 37.73]]
  //     ],
  //     zipcode: 94107,
  //     population: 26599,
  //     area: 6.11
  //   },
  // ]


  // const layer = new PolygonLayer({
  //   id: 'polygon-layer',
  //   data,
  //   pickable: true,
  //   stroked: true,
  //   filled: true,
  //   wireframe: true,
  //   lineWidthMinPixels: 1,
  //   getPolygon: d => d.contour,
  //   getElevation: d => d.population / d.area / 10,
  //   getFillColor: d => [d.population / d.area / 60, 140, 0],
  //   getLineColor: [80, 80, 80],
  //   getLineWidth: 1
  // });
  yield put(
    mapActions.Actions.polygonUpdate({ polygons: [polygons] }),
  );
  yield put(
    mapActions.Actions.layerUpdate({ layers: [europeLayer] }),
  );
}

export function* mapSagas(): Generator<StrictEffect, void, unknown> {
  // yield takeEvery(initActions.ActionTypes.INIT, polygonLoadSaga);
  yield takeEvery(mapActions.ActionTypes.POLYGON_REQUEST, polygonLoadSaga);
}
