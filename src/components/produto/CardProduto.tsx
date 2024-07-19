"use client"

import { useCarrinho } from '@/data/hooks/useCarrinho'
import Produto from '@/data/model/Produto'
import Image from 'next/image'
import React from 'react'

interface CartaoProdutoProps {
  produto: Produto
}

export default function CardProduto({ produto }: CartaoProdutoProps) {

  const { nome, descricao, imagem, preco } = produto
  const {adicionar} = useCarrinho()
  return (
    <div className='flex flex-col w-72'>
      <div className="relative w-72 h-40 ">
        <Image alt={nome} src={imagem} fill className='object-cover' />
      </div>
      <div className='flex-1 flex flex-col gap-4 p-4 bg-zinc-900'>
        <h2 className="text-xl font-bold">{nome}</h2>
        <p className="flex-1 text-sm text-zinc-400">{descricao}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold mt-2">R$ {preco.toFixed(2)}</span>
          <button
            onClick={() => adicionar(produto)}
            className="border rounded-full px-5 py-1 text-sm"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}
