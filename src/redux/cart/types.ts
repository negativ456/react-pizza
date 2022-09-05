export interface CartSliceState {
  items: ICartItem[];
  totalPrice: number;
  totalQuantity: number;
}
export interface ICartItem {
  _id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  quantity: number;
}
