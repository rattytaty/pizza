import React, {useEffect, useState} from 'react';
import '../../scss/app.scss'
import {PizzaPreloader} from "../PizzaPreloader";
import {Categories} from "../Categories";
import {Sort} from "../Sort";
import {Select} from "../Select";
import {PizzaCard} from "../PizzaCard";
import {Pagination} from "./Pagination";
import {api} from "../../api/fetchProducts";

enum pizzaSizes {
    Thin = 0,
    Traditional = 1
}

export type pizza = {
    id: number
    imageUrl: string
    title: string
    types: pizzaSizes[]
    sizes: number[]
    price: number
    category: number
    rating: number,
    description: string
    discount: number
}


const totalItems = 100

export default function PizzasPage() {
    const [products, setProducts] = useState<Array<pizza>>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [selectedLimit, setSelectedLimit] = useState<number>(5)


    const Preloader = [...new Array(4)].map((_, index) => <PizzaPreloader key={index}/>)
    const Pizzas = products.map(pizza => <PizzaCard {...pizza}
                                                    key={pizza.id}
    />)

    /*useEffect(() => {
        window.scrollTo(0, 0)
        setIsLoading(true)
        api.fetchPizzas(currentPage, selectedLimit).then(response => {
            setProducts(response)
            setIsLoading(false)
        })
    }, [selectedLimit, currentPage])*/


    return <div className="container">
            <div className="content__top">
                <Categories/>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Sort/>
                <Select value={selectedLimit} onChange={setSelectedLimit}/>
            </div>
            <h2 className="content__title">Pizzas:</h2>
            <Pagination limitOnPage={selectedLimit}
                        totalAmountOfItems={totalItems}
                        adjacentButtons={2}/>

            <div className="content__items">
                {isLoading ? Preloader : Pizzas}
            </div>
        </div>

}

