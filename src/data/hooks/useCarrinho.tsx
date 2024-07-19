"use client"

import { useContext } from "react";
import CarrinhoContexto from "../contexts/ContextoCarrinho";

export const useCarrinho = () => {
    return useContext(CarrinhoContexto)
}