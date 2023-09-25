import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISupplier } from 'src/app/interfaces/i-supplier';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-add-trx',
  templateUrl: './add-trx.component.html',
  styleUrls: ['./add-trx.component.scss'],
})
export class AddTrxComponent {
  supplier: any;
  lb: any;
  supp?: any;
  constructor(
    private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.supplierService.get().subscribe((resp: any) => {
      this.supplier = resp;
    });
    this.supp = new Supplier();
  }
  back() {
    this.router.navigate(['transaksi']);
  }

  today() {
    return new Date();
  }
  addSuppBar(supp: ISupplier) {
    this.supp = supp;
  }
}
