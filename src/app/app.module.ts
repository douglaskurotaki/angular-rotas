import { AlunosGuard } from "./guards/alunos.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { AuthService } from "./login/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterializeModule } from "angular2-materialize";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app.routing.module";
import { AuthGuard } from "./guards/auth.guard";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, PaginaNaoEncontradaComponent],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, CursosGuard, AlunosGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
