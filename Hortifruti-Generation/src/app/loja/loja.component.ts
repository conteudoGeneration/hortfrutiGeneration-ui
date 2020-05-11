import { ProdutosService } from './../service/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from './../model/Produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  key = 'data';
  reverse = true;
 

  listaProdutos: Produto[]
  
  produto: Produto = new Produto()
  id:number;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.findAllProduto()
    
  }

  findAllProduto(){
    this.produtosService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos= resp
    })
  }
  
  findById(id:number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto=resp
    }, err => {
      console.log("Não preciso do ID para nada agora.")
    });
  }

  publicar(){
      this.produtosService.postProduto(this.produto).subscribe((resp: Produto)=>{
        this.produto= resp;
        this.produto= new Produto();
        this.findAllProduto()
      }) 
    }
    


}
