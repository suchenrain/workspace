import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductComponent } from "./product/product.component";
import { ProductsComponent } from "./products.component";
import { MainComponent } from "./main/main.component";
import { Routes, RouterModule } from "@angular/router";
import { MoreInfoComponent } from "./more-info/more-info.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  { path: "main", component: MainComponent },
  { path: "more-info", component: MoreInfoComponent },
  { path: ":id", component: ProductComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ProductComponent,
    ProductsComponent,
    MainComponent,
    MoreInfoComponent
  ],
  exports: [
    ProductsComponent,
    ProductComponent,
    MainComponent,
    MoreInfoComponent
  ]
})
export class ProductsModule {}
