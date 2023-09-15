import React, {useState} from "react";

export const Categories = () => {

    const pizzaCategories:Array< pizzaCategoriesType> = ["All", "Meat","Vegetarian","Grill","Hot","Closed"]

    type pizzaCategoriesType = "All"|"Meat"|"Vegetarian"|"Grill"|"Hot"|"Closed"

    const [activeCategory, setActiveCategory] = useState< pizzaCategoriesType>("All")

    const changeCategory = (category: pizzaCategoriesType) => {
        setActiveCategory(category)
    }

    const Categories = pizzaCategories.map((Category, index)=>
        <button onClick={()=>changeCategory(Category)}
            key={index}
            className={activeCategory===Category?"active":""}>{Category}</button>
    )

    return <div className="categories">

                {Categories}

        </div>
}