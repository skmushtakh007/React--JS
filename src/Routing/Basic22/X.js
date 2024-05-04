import {Routes,Route} from 'react-router-dom'
import {A} from './A'
import {B} from './B'
import {C} from './C'
export default function X(){
    return(
            <Routes>
                <Route path='/' element={<A/>} />
                <Route path='/b' element={<B/>} />
                <Route path='/c' element={<C/>} />
            </Routes>
    )
}