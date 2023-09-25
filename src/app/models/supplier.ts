import { IBarang } from '../interfaces/i-barang';
import { ISupplier } from '../interfaces/i-supplier';
import { Barang } from './barang';

export class Supplier implements ISupplier {
  alamat?: String = 'Alamat';
  nama?: String = 'Nama';
  listBarang?: Array<IBarang> = [new Barang()];
}
