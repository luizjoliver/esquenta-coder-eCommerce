"use client"

import CardProduto from "@/components/produto/CardProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/Produtos";
import { useCarrinho } from "@/data/hooks/useCarrinho";


export default function Inicio() {

  
  return (
   <Pagina>

     <div className="flex gap-5 justify-center flex-wrap">
      {
        produtos.map((produto) =>(
          <CardProduto produto={produto} key={produto.id}/>
        ))
      }
      </div>
   </Pagina>
  );
}
