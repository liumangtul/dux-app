// Reducer Function - Counter
import { createSlice } from "@reduxjs/toolkit";

/* createSlice 切片 会自动生成 action 类型字符串、action creator 函数、action 对象
  保证里面有 name, reducers, initialState
  以下会生成 action {type: "[name]/[reducers[xxx].key]"}
                  {type: "counter/increment"}...
    说白了就是 不用自己写 action creator 函数, 这里会自动生成,只需要写 reducer 就行了
        Action: -》  {type: "counter/increment"}
        Action Creator 调用: -》 counterSlice.actions.increment()
    这里的 reducer 会生成需要的 reducer
        counterSlice.reducer({
            value: 10,
            counterSlice.actions.increment()
        })// {value: 11}
*/
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            debugger
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};


export const {
    increment,
    decrement,
    incrementByAmount,
} = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;