import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { DespesaDeleteComponent } from './components/despesa/despesa-delete/despesa-delete.component';
import { DespesaUpdateComponent } from './components/despesa/despesa-update/despesa-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { DespesaCrudComponent } from "./views/despesa-crud/despesa-crud.component";
import { DespesaCreateComponent } from './components/despesa/despesa-create/despesa-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },

  {
    path: "despesas",
    component: DespesaCrudComponent
  },
  {
    path: "despesas/create",
    component: DespesaCreateComponent
  },
  {
    path: "despesas/update/:id",
    component: DespesaUpdateComponent
  },
  {
    path: "despesas/delete/:id",
    component: DespesaDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
