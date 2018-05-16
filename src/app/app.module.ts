import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PedidosService } from 'app/servicios/pedidos.service';

import { AppComponent } from './app.component';
import { PedidosComponent } from './pedidos/pedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
