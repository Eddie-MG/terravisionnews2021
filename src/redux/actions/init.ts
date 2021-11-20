import { ActionsUnion, createAction } from '../helpers';

export enum ActionTypes {
  INIT = 'INIT',
}

export const Actions = {
  init: () => createAction(ActionTypes.INIT),
};

export type Actions = ActionsUnion<typeof Actions>;
