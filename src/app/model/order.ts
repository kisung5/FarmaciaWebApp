import { Clientirl } from './clientirl';
import { Drug } from './drug';

export class Order {
    id: number;
    //-nuevo-preparado-facturado-retirado
    status: string;
    date: string;
    name: Clientirl;
    content: Drug[];
}