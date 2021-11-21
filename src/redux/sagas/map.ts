import { put, StrictEffect, takeEvery } from 'redux-saga/effects';


// import { CartoSQLLayer, colorContinuous } from '@deck.gl/carto';
// import { IconLayer, PolygonLayer } from '@deck.gl/layers';
// import { Position, Position2D } from '@deck.gl/core';
import * as mapActions from '../actions/map';
import { Polygon } from '../../types/entity/Map';


export function* polygonLoadSaga(
  action: ReturnType<typeof mapActions.Actions.polygonRequest>,
): Generator<StrictEffect | Promise<boolean>, void> {
  const polygons: Polygon = { rings: [[[654, 42], [344, 2], [334, 57], [76, 24], [654, 42]], [[1, 42], [4, 2], [34, 57], [1, 42]]] }

  yield put(
    mapActions.Actions.polygonUpdate({ polygons: [polygons] }),
  );
}

export function* mapSagas(): Generator<StrictEffect, void, unknown> {
  yield takeEvery(mapActions.ActionTypes.POLYGON_REQUEST, polygonLoadSaga);
}
