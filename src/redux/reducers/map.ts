import { Polygon } from '../../types/entity/Map';
import * as map from '../actions/map';

export interface State {
  polygons: Polygon[];
  countries: string[]
}

export const mapInitialState: State = {
  polygons: [],
  countries: []
};

export const mapReducer = (
  state: State = mapInitialState,
  action: map.Actions,
): State => {
  switch (action.type) {
    case map.ActionTypes.POLYGON_SET:
      return {
        ...state,
        polygons: [action.payload.polygon, ...state.polygons],
      };
    case map.ActionTypes.POLYGON_UPDATE:
      return {
        ...state,
        polygons: action.payload.polygons
      }
    default:
      return state;
  }
};
