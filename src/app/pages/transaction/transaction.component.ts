import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ISupplier } from 'src/app/interfaces/i-supplier';
import { ITransaction } from 'src/app/interfaces/i-transaction';
import { Barang } from 'src/app/models/barang';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  closeResult = '';
  detailTrx?: any;
  supplier: ISupplier = {
    nama: '',
    alamat: '',
    listBarang: [],
  };
  'title': 'Toko Vanntastic | Supplier';
  transaksi: ITransaction = new Transaction();
  trx?: any[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trxService: TransactionService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.trxService.get().subscribe((resp: any) => {
      this.trx = resp;
    });
  }
  AddTrx() {
    this.router.navigate(['trxAdd']);
  }
  addBarangIn() {
    this.transaksi.supplier?.push(this.supplier);
    console.log(this.transaksi.supplier);
  }
  post() {
    this.trxService.post(this.supplier).subscribe((resp: any) => {
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

  TrxDetail(content: any, trx: ITransaction) {
    this.detailTrx = trx;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result?: any) => {
          console.log('opening');
        },
        (reason?: any) => {}
      );
  }
}
