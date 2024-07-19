"use client"

import React, { createContext, useState } from "react"
import ItemCarrinho from "../model/ItemCarrinho"
import Produto from "../model/Produto"

interface ICarrinhoContexto{
  itens:ItemCarrinho[];
  adicionar:(item:Produto) => void
  qntDeItens:number;
  remover:(item:Produto) => void
}


 const CarrinhoContexto = createContext<ICarrinhoContexto>({} as ICarrinhoContexto)



export  function ContextoCarrinhoProvedor({children}:{children:React.ReactElement}) {

  const [itens,setItens] = useState<ItemCarrinho[]>([])

  function adicionar(produto: Produto) {
    const indice = itens.findIndex((i) => i.produto.id === produto.id)

    if (indice === -1) {
        setItens([...itens, { produto, quantidade: 1 }])
    } else {
        const novosItens = [...itens]
        novosItens[indice].quantidade++
        setItens(novosItens)
    }
}

function remover(produto: Produto) {
      const novosItens = itens.map((item) => {
        if(item.produto.id === produto.id){
          item.quantidade--
        }

        return item
      }).filter((item) => item.quantidade > 0)

      setItens(novosItens)
}




  const qntDeItens = itens.reduce((prev,current) =>{
    return prev + current.quantidade
  },0)


  return (
    <CarrinhoContexto.Provider value={{
      itens,
      adicionar,
      qntDeItens,
      remover
    }}>
      {children}
    </CarrinhoContexto.Provider>
  )
}

export default  CarrinhoContexto