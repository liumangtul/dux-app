import { useSelector } from "react-redux";
import {
    selectArticle
} from "./articleSlice.js"
export default function ArticleList() {
    const articles = useSelector(selectArticle);
    const renderedArticleList = articles.list.map((art) => {
        return (
            <article key={art.id} >
                <h3>{art.title}</h3>
                <p>{art.content}</p>
            </article>
        )
    });

    return (
        <section>
            <h2>Article - List</h2>
            {renderedArticleList}
        </section>
    )
}