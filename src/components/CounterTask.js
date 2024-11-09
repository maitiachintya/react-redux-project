import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreCount, resetCount, increCount } from '../components/redux/action/CounterAction'

const CounterTask = () => {
    const res = useSelector((state) => state)
    console.log(res);
    let { count, msg } = res
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => dispatch(increCount())}>+1</button>
                <button onClick={() => dispatch(decreCount())}>-1</button>
                <button onClick={() => dispatch(resetCount())}>reset</button>
                {msg && <h3>{msg}</h3>}
            </div>
        </div>
    )
}

export default CounterTask