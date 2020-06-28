import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from './Actions/index'


function App() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            Counter {counter}<br/>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement(2))}>-</button>
        </div>
    );
}

export default App;
