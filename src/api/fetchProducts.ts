import {pizza} from "../Components/Pages/PizzasPage";

export type Response = pizza[]


export const api = {
    async fetchPizzas(page:number, limit:number) {
        try {
            const url = new URL("https://64999e0e79fbe9bcf83f9fec.mockapi.io/pizzas")
            url.searchParams.append('page', page.toString())
            url.searchParams.append('limit', limit.toString())
            const response = await fetch(url);
            if (response.status >= 300) {
               throw new Error(response.statusText)
            }
            return response.json() as Promise<Response>
        } catch (error) {
            return Promise.reject(error)
        }
    },


}
