export interface ReceiptModel {
  orderData: {
    quantity: number;
    type: string;
    price: number;
  }[];
  totalPrice: number;
  totalTaxAmount: number;
}
