import { Injectable } from '@angular/core';

@Injectable()
export class PedidosService {

  constructor() { }

  pedidos: any = [
    {
      id: 1,
      descripcion: 'B12345678',
      titulo: 'Paseo de la Castellana, 100',
    }
  ]

  getPedidos() {
    return this.pedidos;
  }
}
