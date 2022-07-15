import { Observable } from "rxjs/internal/Observable";

export class OrderDto {
    id:number | null = 0;
    comment:string | null = "";
    totalPrice:number | null = 0;
    deliveryStatus: number | null = 0;
    endTime: Date | null = new Date;
    orderProducts: {[key: number]: number}|null = {};
    address: string|null="";
}