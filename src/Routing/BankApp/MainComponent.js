import { BrowserRouter,Routes,Route } from "react-router-dom";
import BankAppHome from "./BankAppHome";
import PersonalLogin from "./Personal/PersonalLogin";
import PersonalRegister from "./Personal/PersonalRegister";
import NRIRegister from "./NRI/NRIRegister";
import NRILogin from "./NRI/NRILogin";
import NRIHome from "./NRI/NRIHome";
import PersonalHome from "./Personal/PersonalHome";

export default function MainComponent(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<BankAppHome/>}>
                    <Route to="personal" element={<PersonalHome/>}>
                         <Route path="plogin" element={<PersonalLogin/>}></Route>
                        <Route path="pregister" element={<PersonalRegister/>}></Route>
                    </Route>
                    <Route to="nri" element={<NRIHome/>}>
                        <Route path="nregister" element={<NRIRegister/>}></Route>
                        <Route path="nlogin" element={<NRILogin/>}></Route>
                    </Route>
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}