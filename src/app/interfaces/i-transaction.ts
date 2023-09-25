import { ISupplier } from './i-supplier';

export interface ITransaction {
  tanggal: Date;
  grandTotal: Number;
  supplier: Array<ISupplier>;
}
