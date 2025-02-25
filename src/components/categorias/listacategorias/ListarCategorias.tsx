import { useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria'
import { RotatingLines } from "react-loader-spinner";

import { listar } from '../../../services/Sevice'
import CardCategorias from '../cardcategorias/CardCategorias';

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarCategorias() {
        setIsLoading(true)

        try {
            await listar('/categorias', setCategorias)
        } catch (error: any) {
            console.log("Erro ao listar as Categorias!")
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
            {isLoading && (

                <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-4">
                    {(!isLoading && categorias.length === 0) && (
                        <span className="my-8 text-3xl text-center">
                            Nenhuma categoria foi
                            encontrada
                        </span>
                    )}

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {categorias.map((categoria) => (
                            <CardCategorias
                                key={categoria.id}
                                categoria={categoria}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias