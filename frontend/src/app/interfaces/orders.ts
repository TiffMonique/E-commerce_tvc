export interface Order { 
  orderID: string;
  createdAt: Date;
  client: string;
  total: number;
  status: string;
}