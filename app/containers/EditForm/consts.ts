import { ISelectValue } from 'components/inputs/Select';

const SPICINESS_SCALE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const SPICINESS_SCALE_OPTIONS: ISelectValue[] = SPICINESS_SCALE.map(
  el => ({ value: el, name: el.toString() })
);
