import { useCounter } from './useCounter'
export function Counter2() {
    const [count, Increment, Decrement] = useCounter()
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button style={{ marginRight: '20px', color: 'black' }} onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}