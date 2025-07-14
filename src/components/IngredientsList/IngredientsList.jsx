import React, { useState } from "react";
import "./IngredientsList.css";
import "./ButtonAnimation.css";

export default function IngredientsList(props) {
    const [isLoading, setIsLoading] = useState(false);

    const ingredientsListItems = props.ingredients.map((item) => (
        <li key={item}>{item}</li>
    ));

    const handleClick = async () => {
        setIsLoading(true);
        try {
            await props.getRecipe(); // <- fetches recipe from AI
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="ing">
            <h2>
                <span className="desktop-text">Ingredients in your Basket:</span>
                <span className="mobile-text">Ingredients on hand:</span>
            </h2>

            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>

            {props.ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for the recipe?</h3>
                        <p>Unlock a recipe from your kitchen stash.</p>
                    </div>
                    <button disabled={isLoading} onClick={handleClick}>
                        {isLoading ? <span className="loader"></span> : "Get a Recipe"}
                    </button>

                </div>
            )}
        </section>
    );
}
