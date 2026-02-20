import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h1>Chef Claude Recommends:</h1>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}