import { Polygon } from '../../types/entity/Map';
import * as map from '../actions/map';

export interface State {
  polygons: Polygon[];
  countries: string[];
  layers: any[];
}

export const mapInitialState: State = {
  polygons: [],
  countries: [],
  layers: []
};

export const mapReducer = (
  state: State = mapInitialState,
  action: map.Actions,
): State => {
  switch (action.type) {
    case map.ActionTypes.LAYER_UPDATE:
      return {
        ...state,
        layers: action.payload.layers
      }
    default:
      return state;
  }
};
