import { Order } from './order';

import { DRUGS } from './mock-drugs';
import { CLIENTS } from './mock-clients';

export const ORDERS: Order[] = [
    { id: 1, status: 'facturado', date: '12-12-2019', name: CLIENTS[0], content: DRUGS},
    { id: 2, status: 'preparado', date: '11-12-2019', name: CLIENTS[1], content: DRUGS},
    { id: 3, status: 'nuevo', date: '12-10-2019', name: CLIENTS[2], content: [DRUGS[0]]},
    { id: 4, status: 'retirado', date: '12-17-2019', name: CLIENTS[3], content: [DRUGS[0]]},
    { id: 5, status: 'retirado', date: '12-12-2019', name: CLIENTS[3], content: [DRUGS[0]]},
    { id: 4, status: 'retirado', date: '12-15-2019', name: CLIENTS[3], content: [DRUGS[0]]}
]