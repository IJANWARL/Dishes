interface IImageResponse {
  url: string;
  name: string;
}

export interface IListElementResponse {
  name: string;
  number: string;
  description: string;
  images: IImageResponse[];
}
