import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { articleAdded } from "./articleSlice";

export default function AddArticleForm() {

    const [title, setTitle] = useState("");
    const [content, setCotnent] = useState("");
    const dispatch = useDispatch();

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    };
    const onContentChanged = (e) => {
        setCotnent(e.target.value);
    };
    const onSaveArticleClicked = (e) => {
        if (title && content) {
            dispatch(
                articleAdded({
                    id: nanoid(),
                    title,
                    content,
                })
            );
            setTitle("");
            setCotnent("");
        }
    }
    return (
        <section>
            <h2>添加文章</h2>
            <form>
                <label htmlFor="articleTitle">文章标题:</label>
                <input
                    type="text"
                    id="articleTItle"
                    name="articleTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="articleContent">内容:</label>
                <textarea
                    id="articleContent"
                    name="articleContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSaveArticleClicked}>保存文章</button>
            </form>
        </section>
    )
}