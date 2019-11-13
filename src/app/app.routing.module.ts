import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosComponent } from "./cursos/cursos.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "cursos", component: CursosComponent },
  { path: "curso/:id", component: CursoDetalheComponent },
  { path: "naoEncontrado", component: CursoNaoEncontradoComponent }
];

import { NgModule } from "@angular/core";

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
