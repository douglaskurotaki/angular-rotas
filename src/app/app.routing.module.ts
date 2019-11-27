import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import { AlunosGuard } from "./guards/alunos.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  {
    path: "cursos",
    loadChildren: "src/app/cursos/cursos.module#CursosModule",
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  {
    path: "alunos",
    loadChildren: "src/app/alunos/alunos.module#AlunosModule",
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
    //canActivateChild: [AlunosGuard]
  },
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "**", component: PaginaNaoEncontradaComponent }
];

import { NgModule } from "@angular/core";
import { AuthGuard } from "./guards/auth.guard";

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
