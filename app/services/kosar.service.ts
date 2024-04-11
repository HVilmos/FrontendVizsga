import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  addOrder:AngularFireList<any>;
  orderRef:AngularFireList<any>;

  constructor(private db:AngularFireDatabase) { 
    this.addOrder = this.db.list('orderFinish')
    this.orderRef = this.db.list('order')

  }

  finishOrder(body:any){
    return this.addOrder.push(body);
  }

  addToOrder(body:any){
    return this.orderRef.push(body);
  }

  getOrder(){
    return this.orderRef;
  }

  deleteOrder(key:any){
    return this.orderRef.remove(key);

  }

  updateOrder(data:any, newCard:any){
    return this.orderRef.update(data, newCard);
  }
}
