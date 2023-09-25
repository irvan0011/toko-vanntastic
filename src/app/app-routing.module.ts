import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { AddTrxComponent } from './pages/add-trx/add-trx.component';
import { TransactionComponent } from './pages/transaction/transaction.component';

const routes: Routes = [
  { path: '', component: TransactionComponent },
  {
    path: 'transaksi',
    component: TransactionComponent,
    children: [
      {
        path: 'add',
        component: AddTrxComponent,
      },
    ],
  },
  { path: 'supplier', component: SupplierComponent },
  {
    path: 'trxAdd',
    component: AddTrxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
