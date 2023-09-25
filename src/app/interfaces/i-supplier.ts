import { IBarang } from './i-barang';

export interface ISupplier {
  id?: String;
  nama?: String;
  alamat?: String;
  listBarang?: Array<IBarang>;
}
