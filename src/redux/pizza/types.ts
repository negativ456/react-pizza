export type ParamsType = {
  limit: number;
  page: number;
  search: string;
  category: string | number;
  sortBy: string;
};
export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
export interface PizzaSliceState {
  items: IPizzaItem[];
  status: Status;
}
export interface IPizzaItem {
  _id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
}
