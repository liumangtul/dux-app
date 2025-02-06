import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [
        { id: "1", title: "First Post!", content: "Hello!" },
        { id: "2", title: "Second Post", content: "More text" },
    ],
    curArticleId: '',
}
export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        articleAdded: (state, action) => {
            state.list.push(action.payload);
        },
        getCurArticleId: (state, action) => {
            state.curArticleId = action.payload;
        },
        postUpdated: (state, action) => {
            state.list.map((art, index) => {
                if (art.id == action.payload.id) {
                    debugger
                    state.list[index] = action.payload;
                }
            })
        }
    }
});

export const {
    articleAdded,
    getCurArticleId,
    postUpdated,
} = articleSlice.actions;

export const selectArticle = (state) => state.article;
export default articleSlice.reducer;