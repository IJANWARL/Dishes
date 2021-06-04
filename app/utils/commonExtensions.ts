declare global { // eslint-disable-line
  interface String {
    format(obj: object): string;
  }
}

String.prototype.format = function (obj: any): string {
  let a = this;
  const keys: string[] = Object.keys(obj);
  keys.forEach((key: string) => {
    a = a.replace(`{${key}}`, obj[key]).replace(`:${key}`, obj[key]);
  });

  return a as string;
};

export {};
