import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

import { postUpdated } from "./articleSlice";

export default function EditArticleForm() {
    const postId = '1';

    const post = useSelector((state) =>
        state.article.list.find((post) => post.id === postId)
    );

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch = useDispatch();
    // const history = useHistory();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated({ id: postId, title, content }));
            // history.push(`/posts/${postId}`);
        }
    };

    return (
        <section>
            <h2>编辑文章</h2>
            <form>
                <label htmlFor="postTitle">文章标题：</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">内容：</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
            </form>
            <button type="button" onClick={onSavePostClicked}>
                保存文章
            </button>
        </section>
    );
};