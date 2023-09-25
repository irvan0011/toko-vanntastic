import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IBarang } from 'src/app/interfaces/i-barang';
import { ISupplier } from 'src/app/interfaces/i-supplier';
import { Barang } from 'src/app/models/barang';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
})
export class SupplierComponent implements OnInit {
  closeResult = '';
  namaSupplier = '';
  alamatSupplier = '';

  barang: IBarang = new Barang();
  'title': 'Toko Vanntastic | Supplier';
  supplier: ISupplier = new Supplier();
  supptot?: any[];
  constructor(
    private supplierService: SupplierService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.supplierService.get().subscribe((resp: any) => {
      this.supptot = resp;
      console.log(this.supplier);
    });
  }
  addBarang() {
    this.supplier.listBarang?.push({ ...this.barang });
    console.log(this.supplier.listBarang);
  }
  post() {
    this.supplierService.post(this.supplier).subscribe((resp: any) => {
      this.supplier = resp;
      console.log(this.supplier);
    });
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  public getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
