import { SortItem } from "../../components/HomePage/Sort";

export interface FilterSliceState {
  categoryId: number;
  page: number;
  search: string;
  sortOp: SortItem;
}
