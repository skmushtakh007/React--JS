import { useDispatch, useSelector } from "react-redux";
import {purchase_book} from './BookAction'

export function BookContainer() {
    const noOfBooks = useSelector(state => state.NumberOfBooks)   //taking hold of state by using useSelector();
   const dispatch= useDispatch();
    return (
        <>
            <div>BookContainer</div>
            <h2>No of Books - {noOfBooks}</h2>
            <button onClick={()=>{dispatch(purchase_book())}}>Buy Book</button>
        </>
    )
}