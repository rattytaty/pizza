export async function fetchPizzas (page:string, limit:string){
        try {
            const url = new URL("https://64999e0e79fbe9bcf83f9fec.mockapi.io/pizzas")
            url.searchParams.append('page', page)
            url.searchParams.append('limit', limit)
            const res = await fetch(url)
            if (res.status >= 300 ) {
                throw new Error(res.statusText) }
            return res.json()
        } catch (error) {
            console.log(error)
        }
    }
