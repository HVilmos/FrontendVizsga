import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Noveny } from 'src/app/model/noveny';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-novenyek',
  templateUrl: './novenyek.component.html',
  styleUrls: ['./novenyek.component.css']
})
export class NovenyekComponent {

  novenyek: Noveny [] = [];
  searchTerm: string = "";

  constructor(private base: BaseService){
    this.base.getData().snapshotChanges().pipe(
      map( changes => changes.map(
        c => ({key: c.payload.key, ...c.payload.val()})
      ))
    ).subscribe(adatok => this.novenyek = adatok);
  }
  
  addOrder(noveny:Noveny) {
    const orderData = { megnevezes: noveny.megnevezes, ar: noveny.ar, db: noveny.db };
    this.base.addToOrder(orderData);
  }


}
