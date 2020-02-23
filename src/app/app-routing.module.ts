import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { TodosProjetosComponent } from './todos-projetos/todos-projetos.component';
import { WifiQRCodeComponent } from './wifi-qrcode/wifi-qrcode.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: ContentComponent},
  { path: 'projetos', component: TodosProjetosComponent },
  { path: 'teste', component: WifiQRCodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
