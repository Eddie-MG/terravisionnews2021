import { ContinentCsv, GeoJsonStrippedFeature } from '../../types/entity/CsvDto';
import { Polygon } from '../../types/entity/Map';
import { ActionsUnion, createAction } from '../helpers';

export enum ActionTypes {
  POLYGON_REQUEST = 'POLYGON_REQUEST',
  POLYGON_SET = 'POLYGON_SET',
  POLYGON_UPDATE = 'POLYGON_UPDATE',
  LAYER_UPDATE = 'LAYER_UPDATE'
}

export const Actions = {
  polygonRequest: (payload: { geoJson: GeoJsonStrippedFeature[] }) => createAction(ActionTypes.POLYGON_REQUEST, payload),
  polygonSet: (payload: { country: string; polygon: Polygon }) => createAction(ActionTypes.POLYGON_SET, payload),
  polygonUpdate: (payload: { polygons: Polygon[] }) => createAction(ActionTypes.POLYGON_UPDATE, payload),
  layerUpdate: (payload: { layers: any[] }) => createAction(ActionTypes.LAYER_UPDATE, payload),
  // sectorSuccess: (payload: { id: string; name: string }[]) =>
  //   createAction(ActionTypes.SECTOR_SUCCESS, payload),
};

export type Actions = ActionsUnion<typeof Actions>;
