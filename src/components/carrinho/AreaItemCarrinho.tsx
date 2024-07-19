import ItemCarrinho from "@/data/model/ItemCarrinho"
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import Image from "next/image";

export interface AreaItemCarrinhoProps{
    item:ItemCarrinho;
    adicionar?: (item:ItemCarrinho) => void
    remover?: (item:ItemCarrinho) => void

}

export default function AreaItemCarrinho({item,adicionar,remover} : AreaItemCarrinhoProps) {
  return (
    <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden">
    <div className="relative w-28 h-28">
        <Image
            src={item.produto.imagem}
            alt={item.produto.nome}
            fill
            className="object-cover"
        />
    </div>
    <div className="flex flex-col justify-center flex-1">
        <span className="text-xl font-bold">{item.produto.nome}</span>
        <span className="text-sm text-zinc-400">{item.produto.descricao}</span>
        <div className="flex items-center gap-2 mt-2 text-zinc-400 text-lg font-bold">
            <span>R$ {item.produto.preco.toFixed(2)}</span>
            <IconX size={20} />
            <span>{item.quantidade}</span>
            <span>=</span>
            <span className="text-yellow-500">
                R$ {(item.produto.preco * item.quantidade).toFixed(2)}
            </span>
        </div>
    </div>
    <div className="flex gap-2 items-center px-5">
        <button onClick={() => remover?.(item)}>
            <IconMinus />
        </button>
        <span className="flex px-4 py-2 rounded-md bg-black">{item.quantidade}</span>
        <button onClick={() => adicionar?.(item)}>
            <IconPlus />
        </button>
    </div>
</div>
  )
}
