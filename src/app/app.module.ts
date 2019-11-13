import { CursosModule } from "./cursos/cursos.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    CursosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
