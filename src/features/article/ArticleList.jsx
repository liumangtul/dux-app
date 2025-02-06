import { useSelector, useDispatch } from "react-redux";
import {
    selectArticle,
    getCurArticleId,
} from "./articleSlice.js"
// import { useState } from "react";
export default function ArticleList() {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticle);
    const onShowEditArticleClicked = (articleId) => {
        return () => {
            dispatch(getCurArticleId(articleId));
        }
    }
    const renderedArticleList = articles.list.map((art) => {
        return (
            <article key={art.id} >
                <b>用户 ID: {art.id}</b>
                <h3>{art.title}</h3>
                <p>{art.content}</p>
                <button onClick={onShowEditArticleClicked(art.id)}>编辑文章</button>
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