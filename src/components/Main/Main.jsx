import './Main.css'
import { useState } from "react"
import Ingredientslist from "../IngredientsList/IngredientsList"
import Recipe from "../Recipe/Recipe"
import { getRecipeFromMistral } from '../../ai'

function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe]= useState("");

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
                                            ingredients={ingredients} 
                                            getRecipe={getRecipe} 
                                        />
            }
            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}
export default Main;