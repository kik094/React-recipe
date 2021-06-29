import React,{useState} from 'react'
import RecipeDetails from "./RecipeDetails"

function Recipe({recipe}) {

    const [show, setShow] = useState(false)
    const [clicked, setClicked] = useState(false)

    const {label, image, url, ingredients} = recipe.recipe


    const showMore = ()=>{
        setShow(!show)
        setClicked(!clicked)
    }

    return (
        <div className="menu-card">
           <h2 style={{color: "black"}}>{label}</h2>
           <img className='recipe-img'src={image} alt={label}/>
           <a className="read-more-btn" href={url}  rel="noreferrer" target="_blank">Read more</a>
          <button className={!clicked ? "ingredients-btn" : "ingredients-btn clicked"} onClick={showMore}>Ingredients</button>
          {show && <RecipeDetails ingredients = {ingredients}/>}
        </div>
    )
}

export default Recipe
