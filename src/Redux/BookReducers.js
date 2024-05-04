import { buy_book } from "./BookType";
const initialState={
    NumberOfBooks:20
}
const BookRuducer=(state=initialState,action)=>{
    switch(action.type){
        case buy_book:return {
            ...state,NumberOfBooks:state.initialState-1
        }
        default:return state
    }
}
export default BookRuducer;