import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../guards/login.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../guards/admin.guard';



const routes: Routes = [
    { 
        path:'', 
        component: PagesComponent, 
        canActivate:[LoginGuard],
        children:[
            { path: 'dashboard', component:DashboardComponent, data: {titulo: 'Dashboard' } },
            { path:'progress', component: ProgressComponent, data: {titulo: 'Progress' } },
            { path:'graficas1', component: Graficas1Component, data: {titulo: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas' } },
            { path:'account-settings', component: AccountSettingsComponent, data: {titulo: 'Settings' } },
            { path: 'rxjs' , component: RxjsComponent, data: {titulo: 'Observables' }},
            { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de Usuario' } },
            { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
            //Mantenimientos
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de usuarios' }, canActivate:[AdminGuard] },
            { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de hospitales' } },
            { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' } },
            { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Acutualizar médico' } },
            { path:'', redirectTo: 'dashboard', pathMatch: 'full' }
          ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
