import { Provider } from "react-redux";    //react provide Provider Library with the help of Provider we can connect react to Redux.
import store from "./Store";         //importing store because provider dont know where state.passing store as a props
import { BookContainer } from "./BookContainer";
export function AppRedux(){
    return(
        //wrapping inside provider
        <Provider store={store}>
                <BookContainer/>
        </Provider>
    )
}