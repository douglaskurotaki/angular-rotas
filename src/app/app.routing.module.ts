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
    canActivateChild: [CursosGuard]
  },
  {
    path: "alunos",
    loadChildren: "src/app/alunos/alunos.module#AlunosModule",
    canActivate: [AuthGuard]
    //canActivateChild: [AlunosGuard]
  },
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent }
];

import { NgModule } from "@angular/core";
import { AuthGuard } from "./guards/auth.guard.service";

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
