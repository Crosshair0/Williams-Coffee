import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/Menu-links/contacto/contacto.component';
import { EmpresaComponent } from './components/Menu-links/empresa/empresa.component';
import { LocalesComponent } from './components/Menu-links/locales/locales.component';
import { MenuComponent } from './components/Menu-links/menu/menu.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'locales', component:LocalesComponent},
  {path: 'empresa', component:EmpresaComponent},
  {path: 'contacto', component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
