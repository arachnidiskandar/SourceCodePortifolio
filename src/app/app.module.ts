import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { NgxKjuaModule } from 'ngx-kjua';
import { AppRoutingModule } from './app-routing.module';
import { TodosProjetosComponent } from './todos-projetos/todos-projetos.component';
import { WifiQRCodeComponent } from './wifi-qrcode/wifi-qrcode.component';
import { FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProjetosComponent,
    ProjetoComponent,
    TodosProjetosComponent,
    WifiQRCodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxKjuaModule,
    AppRoutingModule,
    FormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
