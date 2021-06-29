import React from 'react'
// import Recipe from './Recipe'


function RecipeDetails({ingredients}) {
    

    return ( 
        ingredients.map(ingredient=>{
            return (<ul className="ingredient-list" key={Math.floor(Math.random) * 10000}>
                <li>
                    {ingredient.text}
                </li>
                <li>
                   Weight: {ingredient.weight.toFixed(2)} gr.
                </li>
            </ul>)
        })
    )
}

export default RecipeDetails
