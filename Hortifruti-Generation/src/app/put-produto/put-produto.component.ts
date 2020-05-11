import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  id:number;

  constructor(private produtosService: ProdutosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params["id"];
    this.findById(this.id);
  }

  findById(id:number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto=resp
    
    }, err => {
      console.log(`Erro cod: ${err.status}`)
    });
  }

  atualizar(){
  this.produtosService.putProduto(this.produto).subscribe((resp: Produto)=>{
    this.produto= resp;
    this.router.navigate(['/loja'])
  })
}

}
