import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: "cursos", loadChildren: "src/app/cursos/cursos.module#CursosModule" },
  { path: "alunos", loadChildren: "src/app/alunos/alunos.module#AlunosModule" },
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent }
];

import { NgModule } from "@angular/core";

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
