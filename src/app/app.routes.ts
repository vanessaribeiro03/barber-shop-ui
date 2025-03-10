import { Routes } from '@angular/router';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { SchedulesMonthComponent } from './schedules/schedules-month/schedules-month.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'clients/edit-client/:id', component: EditClientComponent, data: { title: 'Atualizar Cliente' } }, 
    { path: 'clients/new-client', component: NewClientComponent, data: { title: 'Cadastrar Cliente' } }, 
    { path: 'clients/list', component: ListClientsComponent, data: { title: 'Clientes Cadastrados' } }, 
    { path: 'schedules/month', component: SchedulesMonthComponent, data: { title: 'Agendamentos' } },
    { path: '**', redirectTo: '' }
];
