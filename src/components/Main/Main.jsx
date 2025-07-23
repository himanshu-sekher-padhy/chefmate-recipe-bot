import './Main.css'
import { useState, useRef, useEffect } from "react"
import Ingredientslist from "../IngredientsList/IngredientsList"
import Recipe from "../Recipe/Recipe"
import { getRecipeFromMistral } from '../../ai'

function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe]= useState("");

    const recipeSection= useRef(null);

    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])
    
    async function getRecipe(){
        const recipeMarkdown= await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    return (
        <main>
            <form action={addIngredient} className='add-ingredient-form'>
                <input
                    type="text"
                    aria-label="Add ingredients"
                    placeholder="e.g. Tomato"
                    name="ingredient"
                />
                <button>
                    <span className="desktop-text">Add Ingredient</span>
                    <span className="mobile-text">Add</span>
                </button>
            </form>

            {ingredients.length > 0 && <Ingredientslist 
                                            ref={recipeSection}
                                            ingredients={ingredients} 
                                            getRecipe={getRecipe} 
                                        />
            }
            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}
export default Main;
