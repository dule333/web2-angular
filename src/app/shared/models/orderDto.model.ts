import { Observable } from "rxjs/internal/Observable";

export class OrderDto {
    id:number | null = 0;
    comment:string | null = "";
    totalPrice:number | null = 0;
    deliveryStatus: number | null = 0;
    endTime: Date | null = new Date;
    products: Map<number, number>|null = new Map<number, number>();
    address: string|null="";
}