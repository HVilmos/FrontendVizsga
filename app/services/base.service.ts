import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  dataRef:AngularFireList<any>;
  orderRef:AngularFireList<any>;


  constructor(private db:AngularFireDatabase) {
    this.dataRef = this.db.list('db');
    this.orderRef = this.db.list('order');

  }

  getData(){
    return this.dataRef;
  }

  deleteData(key:any){
    return this.dataRef.remove(key);
  }

  updateData(data:any, newCard:any){
    return this.dataRef.update(data, newCard);
  }

  addData(body:any){
    return this.dataRef.push(body);
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
