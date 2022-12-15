import counterStore from "../store/CounterStore";

export default function Counter(){
    const count = counterStore(state=>state.count)
    const increaseCount = counterStore(state=>state.increaseCount)
    const decreaseCount = counterStore(state=>state.decreaseCount)
    const resetCount = counterStore(state=>state.resetCount)
    return(
        <div className="counter">
            <h1>React Zustand App</h1>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}