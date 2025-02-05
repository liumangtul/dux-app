import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            list: [],
            name: ""
        }
    },
    reducers: {
        list: (state, action) => {
            state.value.list = action.payload;
        },
        myname: (state, action) => {
            state.value.name = action.payload;
        },
    }
});

const getData = (userId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([userId, 'aaa', 'bbbb', 'ccc']);
        }, 300)
    });
}

const getName = (userId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('芭芭拉');
        }, 300)
    });
}

// 外部的 thunk creator 函数
export const fetchUserListById = (userId) => {
    // 内部的 thunk 函数
    return async (dispatch, getState) => {
        try {
            // thunk 内发起异步数据请求
            const result = await getData(userId);
            // 数据响应完成后 dispatch 一个 action
            dispatch(list(result));
        } catch (err) {
            // 如果过程出错，在这里处理
            console.log(err);
        }
    }
}

// 外部的 thunk creator 函数
export const fetchUserNameById = (userId) => {
    // 内部的 thunk 函数
    return async (dispatch, getState) => {
        try {
            // thunk 内发起异步数据请求
            const result = await getName(userId);
            // 数据响应完成后 dispatch 一个 action
            dispatch(myname(result));
        } catch (e) {
            // 如果过程出错，在这里处理
            console.log(e);
        }
    }
}

export const {
    list,
    myname
} = userSlice.actions;

export const selectUser = (state) => state.user.value;
export default userSlice.reducer;