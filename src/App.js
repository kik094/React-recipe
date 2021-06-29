import React,{useState} from 'react'
import "./App.css"
import Axios from "axios"
import Recipe from "./components/Recipe" 
import Alert from "./components/Alert"


function App() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [alert, setAlert] = useState("")

const APP_ID = "94c2df4a"
const APP_KEY = "a9a9fb1171322c71310aef4be8a2eeb7"
const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

const getData = async ()=> {

  if (query !==""){
  const result = await Axios.get(url)
  if (!result.data.more){
    return setAlert("No food with such name")
  }
  setRecipes(result.data.hits)
  setAlert("")
  setQuery("")
  }else {
    setAlert("Please fill the form")
  }

}

const onChange=(e)=>{
setQuery(e.target.value)
}

const onSubmit = (e)=>{
  e.preventDefault()
  getData()

}

  return (
    <div>
     <h1 className="heading--white">Search for recipe</h1>
     <form  className="search-form"  onSubmit={onSubmit}>
      {alert !=="" && <Alert alert={alert} />} 
      <div className="input-fields-wrap">
       <input className="search-input" type="text" placeholder="Search for recipes" onChange={onChange} value={query}/>
       <button className="search-btn" type="submit"><i className="fa fa-search"></i></button>
       </div>
     </form>

    <div className="foods-list">{recipes!==[] && recipes.map(recipe=><Recipe recipe={recipe} key={recipe.calories}/>)}</div>
    </div>
  );
}

export default App;
