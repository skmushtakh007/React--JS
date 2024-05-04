import { useState } from "react"

export function ComponentParent() {
    const [name, setName] = useState("");
    const [pswd, setPswd] = useState("");
    // function handleInput(e){
    //     const capName=(e.target.value).toUpperCase();
    //     setName(capName);
    // }
    // function handlePassword(e){
    //     setPswd(e.target.value)
    // }
    function handleChange(e) {
        if (e.target.name === "firstname") {
            const capsName = (e.target.value).toUpperCase();
            setName(capsName)
        }
        else {
            setPswd(e.target.value)
        }
    }
    return (
        // <div>
        //     <form>
        //         <label>First Name:</label><br />
        //         <input type="text" value={name} onChange={handleInput} /><br />
        //         <label htmlFor="">Password:</label><br />
        //         <input type="text" value={pswd} name="" onChange={handlePassword} id="" />

        //     </form>
        // </div>



        // Handling multiple events by using single event handler
        <div>
            <form>
                <label>First Name:</label><br />
                <input type="text" value={name} name="firstname" onChange={handleChange} /><br />
                <label>Password:</label><br />
                <input type="text" value={pswd} name="password" onChange={handleChange} />

            </form>
        </div>
    )
}