import { IBarang } from '../interfaces/i-barang';

export class Barang implements IBarang {
  namaBarang: String = 'A';
  deskripsi: String = 'Test';
  harga: Number = 30000;
  qty: Number = 0;
  subtotal: Number = 0;
}
