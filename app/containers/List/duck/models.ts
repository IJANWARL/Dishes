import { DISHES } from 'consts';
import { IDuration } from 'utils/commonExtensions';

export interface IDishState {
  name: string;
  preparationTime: IDuration;
  type: DISHES;
  noOfSlices?: number;
  diameter?: number;
  spicinessScale?: number;
  slicesOfBread?: number;
}

export const initialDishState: IDishState = {
  name: '',
  preparationTime: { hours: 0, minutes: 0, seconds: 0 },
  type: 'pizza',
  spicinessScale: 1
};
