import "./Recipe.css";
import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>ChefMate's pick:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}