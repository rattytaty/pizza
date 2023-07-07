import React, {useState} from "react";


export const Categories = () => {

    const pizzaCategories:Array< pizzaCategoriesType> = ["All", "Meat","Vegetarian","Grill","Hot","Closed"]

    type pizzaCategoriesType = "All"|"Meat"|"Vegetarian"|"Grill"|"Hot"|"Closed"

    const [activeCategory, setActiveCategory] = useState< pizzaCategoriesType>("All")

    const changeCategory = (category: pizzaCategoriesType) => {
        setActiveCategory(category)
    }

    const Categories = pizzaCategories.map((Category, index)=>
        <li onClick={()=>changeCategory(Category)}
            key={index}
            className={activeCategory===Category?"active":""}>{Category}</li>
    )





    return (
        <div className="categories">
            <ul>
                {Categories}
            </ul>
        </div>
    )
}