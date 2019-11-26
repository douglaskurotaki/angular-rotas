import { RouterModule, Router } from "@angular/router";
import { NgModule } from "@angular/core";

import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunosComponent } from "./alunos.component";
import { AlunosGuard } from "./../guards/alunos.guard";
import { AlunosDeactivateGuard } from "../guards/alunos-deactivated.guard";

const alunosRoutes = [
  {
    path: "",
    component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: "novo", component: AlunoFormComponent },
      { path: ":id", component: AlunoDetalheComponent },
      {
        path: ":id/editar",
        component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {}
