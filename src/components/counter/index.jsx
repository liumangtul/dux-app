import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from '../../features/counter/counterSlice';
import {
    selectUser,
    fetchUserListById,
    fetchUserNameById
} from "../../features/user/userSlice";
export default function Counter() {

    /*
    const [cNumber, setCnum] = useState(0);
    let [list, addI] = useState(['a', 'b', 'c']);
    const add = () => {
        setCnum((prevcNumber) => prevcNumber + 1);
    };
    const input = React.createRef();
    let value = '';
    const addItem = () => {
        addI(list => [...list, value])
        input.current.value = '';
    }
    const handleChange = (ev) => {
        value = ev.target.value;
    }
        */

    const dispatch = useDispatch();
    const counter = useSelector(selectCount);
    const [incrementAmount, setIncrementAmount] = useState('100');
    const user = useSelector(selectUser);

    return (
        <div>
            <>
                {/*<div className="wrpa1">
                <h1>基础版数据交互</h1>
                Value: {cNumber} <button onClick={add}>add</button>
                <input type="text" onChange={handleChange} ref={input} />
                <button onClick={addItem} >Add List Item</button>
                <ul>
                    {
                        list.map((item) => {
                            return (
                                <li key={item}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>*/}
            </>
            <div className="wrpa2">
                <h1>Redux 版交互</h1>
                <button
                    onClick={() => dispatch(increment())}
                >Counter Redux Increment</button>

                <button
                    onClick={() => dispatch(decrement())}
                >Counter Redux Decrment</button>

                <button
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                >Add Amount</button>

                <input
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />

                <button
                    onClick={() => dispatch(incrementAsync())}
                >Counter Redux Async</button>

                <p>{counter}</p>

                <button
                    onClick={() => dispatch(fetchUserListById(999))}
                >获取Mock数据->list</button>
                <ul>
                    {
                        user.list.map((item) => {
                            return (
                                <li key={item}>{item}</li>
                            )
                        })
                    }
                </ul>
                <h3>我的名字是{user.name}</h3>
                <button
                    onClick={() => dispatch(fetchUserNameById(666))}
                >获取Mock数据->名字</button>
            </div>
        </div>
    )
}