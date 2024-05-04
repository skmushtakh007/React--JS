import { useCounter } from './useCounter'
export function Counter1() {
    const [count, Increment, Decrement] = useCounter(10)
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button style={{ marginRight:'20px', color:'black' }} onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}