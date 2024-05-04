import { useState } from "react";
export default function FormComponent() {
    const [users] = useState([
        { UserId: 'john' },
        { UserId: 'john12' },
        { UserId: 'david' },
        { UserId: 'Brett Lee' }
    ]);
    const [userMsg, setUserMsg] = useState();
    // for check user valid or not according to color  (Red or Green)
    const [isUserValid, setUserValid] = useState(false);
    // for password reference
    const [pwdMsg, setPwdMsg] = useState('');
    // For city validation
    const [cityMsg, setCityMsg] = useState('');
    // to get data after register
    const [userDetails,setUserDetails]=useState({UserId:'',Password:'',City:''});

    function VerifyUserId(e) {
        for (var user of users) {
            if (user.UserId === e.target.value) {
                setUserMsg('User Id taken - Try Another');
                setUserValid(false);
                break;
            }
            else {
                setUserMsg('User Id Available');
                setUserValid(true);
            }
        }
    }
    // to blur after remove curser and check checkbox filled or not
    function HideUserMsg(e) {
        if (e.target.value == "") {
            setUserMsg('User Id Required')
        } else {
            setUserMsg('')
        }

    }
    // For Password Validation
    function VerifyPassword(e) {
        if (e.target.value.match(/(?=.*[A-Z])\w{4,10}/)) {
            setPwdMsg('Strong Password')
        }
        else {
            if (e.target.value.length < 4) {
                setPwdMsg('Poor Password')
            }
            else {
                setPwdMsg('Weak Password')
            }
        }
    }
    function HidePasswordMsg() {
        setPwdMsg('')
    }
    function VerifyCity(e) {
        if (e.target.value == 'nocity') {
            setCityMsg('Please Select a City')
        }
        else {
            setCityMsg('')
        }
    }
    function HandleUserChange(e){
        setUserDetails({
            UserId:e.target.value,
            Password:userDetails.Password,
            City:userDetails.City
        })
    }
    function HandlePasswordChange(e){
        setUserDetails({
            UserId:userDetails.UserId,
            Password:e.target.value,
            City:userDetails.City
        })
    }
    function RegisterClick(){
        alert(JSON.stringify(userDetails));
    }

    return (
        <div className="container-fluid">
            <h2>Register Component</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onChange={HandleUserChange} onBlur={HideUserMsg} onKeyUp={VerifyUserId} /></dd>
                <dd className={(isUserValid === true) ? 'text-success' : 'text-danger'}>{userMsg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={HandlePasswordChange}  onBlur={HidePasswordMsg} onKeyUp={VerifyPassword} /></dd>
                <dd>{pwdMsg}</dd>
                <dt>Your City</dt>
                <dd>
                    <select onChange={VerifyCity}>
                        <option value="nocity">Select Your City</option>
                        <option value="Pune">Pune</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </dd>
                <dd className="text-danger">{cityMsg}</dd>
            </dl>
            <button onClick={RegisterClick}>Register</button>
        </div>
    )
}