import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { LojaComponent } from './loja/loja.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:  'full' },
  { path:'home', component: HomeComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'editar/:id', component: PutProdutoComponent },
  { path: 'delete/:id', component: DeleteProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
