import { CursosComponent } from "./cursos/cursos.component";
import { LoginComponent } from "./login/login.component";
import { Component, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";

const APP_ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "cursos", component: CursosComponent },
  { path: "curso/:id", component: CursoDetalheComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
