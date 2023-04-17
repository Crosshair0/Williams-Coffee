import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CafesComponent } from './components/cafes/cafes.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocalesComponent } from './components/Menu-links/locales/locales.component';
import { EmpresaComponent } from './components/Menu-links/empresa/empresa.component';
import { ContactoComponent } from './components/Menu-links/contacto/contacto.component';
import { MenuComponent } from './components/Menu-links/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    CafesComponent,
    SucursalesComponent,
    FooterComponent,
    LocalesComponent,
    EmpresaComponent,
    ContactoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
