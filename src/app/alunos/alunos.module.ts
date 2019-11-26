import { AlunosService } from "./alunos.service";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AlunosComponent } from "./alunos.component";
import { CommonModule } from "@angular/common";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosDeactivateGuard } from "../guards/alunos-deactivated.guard";

@NgModule({
  imports: [CommonModule, AlunosRoutingModule, FormsModule],
  exports: [],
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
  providers: [AlunosService, AlunosDeactivateGuard]
})
export class AlunosModule {}
