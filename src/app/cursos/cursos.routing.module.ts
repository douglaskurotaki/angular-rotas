import { Routes, RouterModule } from "@angular/router";

import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosComponent } from "./cursos.component";

const cursosRoutes: Routes = [
  { path: "", component: CursosComponent },
  { path: "naoEncontrado", component: CursoNaoEncontradoComponent },
  { path: ":id", component: CursoDetalheComponent }
];

import { NgModule } from "@angular/core";

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
