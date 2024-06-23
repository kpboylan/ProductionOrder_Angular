import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOrder } from './order.model';
import { OrderService } from './order.service';
import { IPlant } from './plant.model';
import { IMaterial } from './material.model';
import { IUom } from './uom.model';
import { PlantService } from './plant.service';
import { UomService } from './uom.service';
import { MaterialService } from './material.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {

  order: IOrder = { ordernumber: '', material: '', uom: '', quantity: 0, location: ''};
  material: IMaterial = { materialid: '', materialname: '', materialnumber: ''};
  uom: IUom = { unitid: '', unitname: '', unitabbr: ''};

  plants: any;
  materials: any;
  uoms: any;
  orders: any;
  
  constructor (
    private orderService: OrderService, 
    private plantSvc: PlantService,
    private uomSvc: UomService,
    private materialSvc: MaterialService
  ) {}

  ngOnInit() {
    this.plantSvc.getPlants().subscribe(plants => {
      this.plants = plants;
    })

    this.uomSvc.getUom().subscribe(uoms => {
      this.uoms = uoms;
    })

    this.materialSvc.getMaterials().subscribe(materials => {
      this.materials = materials;
    })

    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    })
  }

  orderButtonClicked() {
    /** This will post to the API which will insert the order to a SQL Server table */
    this.orderService.createOrder(this.order);

    /** This will post to the API and add an order message to RabbitMQ */
    //this.orderService.createOrderQueue(this.order);
  }
}
