import { DISHES } from 'consts';

export interface ISaveDishRequest {
  name: string;
  preparationTime: string;
  type: DISHES;
  noOfSlices?: number;
  diameter?: number;
  spicinessScale?: number;
  slicesOfBread?: number;
}

export interface ISaveDishResponse {
  name: string;
  diameter?: number;
  noOfSlices?: number;
  slicesOfBread?: number;
  spicinessScale?: number;
  preparationTime: string;
  type: DISHES;
  id: number;
}
