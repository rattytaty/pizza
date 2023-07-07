import React, {useEffect, useState} from 'react';
import '../../scss/app.scss'
import {fetchPizzas} from "../../api/fetchProducts";
import {PizzaPreloader} from "../PizzaPreloader";
import {Categories} from "../Categories";
import {Sort} from "../Sort";
import {Select} from "../Select";
import {PizzaCard} from "../PizzaCard";


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

export default function PizzasPage() {
    const [products, setProducts] = useState<Array<pizza>>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [selectedLimit, setSelectedLimit] = useState<number>(10)
    const limitOnPage = selectedLimit.toString()
    useEffect(() => {
        setIsLoading(true)
        fetchPizzas("1", limitOnPage)
            .then(pizzas => {
                setProducts(pizzas)
                setIsLoading(false)
            })
    }, [limitOnPage])


    const Preloader = [...new Array(4)].map((_, index) => <PizzaPreloader key={index}/>)
    const Pizzas = products.map(pizza =>
        <PizzaCard {...pizza}
                   key={pizza.id}
        />
    )

    return <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
                <Select value={selectedLimit} onChange={setSelectedLimit}/>
            </div>
            <h2 className="content__title">Pizzas:</h2>
            <div className="content__items">
                {isLoading ? Preloader : Pizzas}
            </div>
        </div>
}

