import { createContext } from "react"
import ChildC from './ChildC'
const data = createContext();
const data1 = createContext();
export default function ChildA() {
    const firstname="Shkh";
    const lastname="Mustakh"
    return (
        <data.Provider value={firstname}>
            <data.Provider value={lastname}>
                <ChildC/>
            </data.Provider>
        </data.Provider>
    )
}
export { data, data1 };