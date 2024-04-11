import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Megrendeles } from 'src/app/model/megrendeles';
import { BaseService } from 'src/app/services/base.service';
import { KosarService } from 'src/app/services/kosar.service';

@Component({
  selector: 'app-rendeles',
  templateUrl: './rendeles.component.html',
  styleUrls: ['./rendeles.component.css']
})
export class RendelesComponent {

  orders: Megrendeles [] = [];
  vasarlonev:any;
  vasarloHely:any;

  constructor(private base: BaseService, private router:Router, private kosar:KosarService){
    this.kosar.getOrder().snapshotChanges().pipe(
      map( changes => changes.map(
        c => ({key: c.payload.key, ...c.payload.val()})
      ))
    ).subscribe(adatok => this.orders = adatok);
  }

  delete(data:any){
    this.base.deleteOrder(data.key)
  }

  finish(){
    const orderItems = {
      vasarloNev: this.vasarlonev,
      vasarlohely: this.vasarloHely,
      order: this.orders
    }

    this.kosar.finishOrder(orderItems);

    this.orders.forEach((data:any) => {
      this.base.deleteOrder(data.key)
    });
0
    this.router.navigate(['/rolunk'])

  }
}
