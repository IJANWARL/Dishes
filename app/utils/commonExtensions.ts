declare global { // eslint-disable-line
  interface String {
    format(obj: object): string;
    removeNoDuration(): string;
    toDuration(): IDuration;
  }

  interface Number {
    leadingZero(): string;
  }
}

export interface IDuration {
  hours: number;
  minutes: number;
  seconds: number;
}

String.prototype.format = function (obj: any): string {
  let a = this;
  const keys: string[] = Object.keys(obj);
  keys.forEach((key: string) => {
    a = a.replace(`{${key}}`, obj[key]).replace(`:${key}`, obj[key]);
  });

  return a as string;
};

String.prototype.removeNoDuration = function () {
  return this.replace(/[^0-9:]/g, '');
};

String.prototype.toDuration = function () {
  const values = this.removeNoDuration()
    .split(':')
    .concat(['0', '0', '0'])
    .slice(0, 3)
    .map(el => el.slice(0, 2) || '0');
  return {
    hours: parseInt(values[0]),
    minutes: parseInt(values[1]),
    seconds: parseInt(values[2])
  };
};

Number.prototype.leadingZero = function (): string {
  return this < 10 ? `0${this}` : this.toString();
};

export {};
