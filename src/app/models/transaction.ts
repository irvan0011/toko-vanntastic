import { ISupplier } from '../interfaces/i-supplier';
import { ITransaction } from '../interfaces/i-transaction';
import { Supplier } from './supplier';

export class Transaction implements ITransaction {
  tanggal: Date = new Date();
  grandTotal: Number = 0;
  supplier: Array<ISupplier> = [new Supplier()];
}
