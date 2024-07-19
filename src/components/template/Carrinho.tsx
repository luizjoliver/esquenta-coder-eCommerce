"use client"

import { useCarrinho } from "@/data/hooks/useCarrinho";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";


export default function Carrinho() {

    const {qtdeDeItens} = useCarrinho()
  return (
    <Link href={"/carrinho"}>
       <div className="relative flex ">
        <IconShoppingCart size={32} stroke={1}/>

        <div className="absolute w-6 h-6 -top-2.5 -right-2.5 bg-red-500 rounded-full flex items-center justify-center text-xs">{qtdeDeItens}</div>
       </div>
    </Link>
  )
}
