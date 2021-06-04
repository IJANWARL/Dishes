import { DISHES } from 'consts';

export interface IListElementState {
  name: string;
  preparationTime: number;
  type: DISHES;
  noOfSlices?: number;
  diameter?: number;
  spicinessScale?: number;
  slicesOfBread?: number;
}
