import { GeoJsonStrippedFeature } from '../../types/entity/CsvDto';
import { Polygon } from '../../types/entity/Map';
import { ActionsUnion, createAction } from '../helpers';

export enum ActionTypes {
  POLYGON_REQUEST = 'POLYGON_REQUEST',
  LAYER_UPDATE = 'LAYER_UPDATE'
}

export const Actions = {
  polygonRequest: (payload: { geoJson: GeoJsonStrippedFeature[] }) => createAction(ActionTypes.POLYGON_REQUEST, payload),
  layerUpdate: (payload: { layers: any[] }) => createAction(ActionTypes.LAYER_UPDATE, payload),
};

export type Actions = ActionsUnion<typeof Actions>;
