"use client"

import {ContextoCarrinhoProvedor} from '@/data/contexts/ContextoCarrinho'
import React from 'react'

export default function layoutLoja({children}:{children:React.ReactElement}) {
  return (
    <ContextoCarrinhoProvedor>
        {children}
    </ContextoCarrinhoProvedor>
  )
}
