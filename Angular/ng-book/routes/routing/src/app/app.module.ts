import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AUTH_PROVIDERS } from "./shared/auth.service";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { ProtectedComponent } from "./protected/protected.component";
import { LoggedInGuard } from "./shared/logged-in.guard";
import { ProductsComponent } from "./products/products.component";

import {
  routes as childRoutes,
  ProductsModule
} from "./products/products.module";
/* configure routes */
const routes: Routes = [
  //basic routes
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "contactus", redirectTo: "contact" },

  // { path: "product/:id", component: ProductComponent },

  //authentication demo
  { path: "login", component: LoginComponent },
  {
    path: "protected",
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  },
  //nested routes
  {
    path: "products",
    component: ProductsComponent,
    children: childRoutes
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), ProductsModule],
  providers: [
    // uncomment this for "hash-bang" routing
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
