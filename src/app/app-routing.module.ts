import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnitComponent } from './unit/unit.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: UnitComponent},
  { path: 'cotizacion', component: CotizacionComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
