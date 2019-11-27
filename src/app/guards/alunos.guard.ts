import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild {
  constructor() {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("AuthGuard: Guarda de rota filha");

    if (state.url.includes("editar")) {
      alert("Usuário sem acesso!");
      // return false;
    }
    return true;
  }
}
