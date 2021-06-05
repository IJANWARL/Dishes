import { IDuration } from './commonExtensions';

export const durationToString = (v: IDuration, leadingZeros = true) =>
  leadingZeros
    ? `${v.hours.leadingZero()}:${v.minutes.leadingZero()}:${v.seconds.leadingZero()}`
    : `${v.hours}:${v.minutes}:${v.seconds}`;
