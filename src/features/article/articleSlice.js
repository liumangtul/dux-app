import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [
        { id: "1", title: "First Post!", content: "Hello!" },
        { id: "2", title: "Second Post", content: "More text" },
    ]
}
export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        articleAdded: (state, action) => {
            state.list.push(action.payload);
        }
    }
});

export const {
    articleAdded
} = articleSlice.actions;

export const selectArticle = (state) => state.article;
export default articleSlice.reducer;