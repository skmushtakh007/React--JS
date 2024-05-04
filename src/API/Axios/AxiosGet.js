import axios from "axios";

import { useEffect, useState } from "react";

const AxiosGet = () => {
    const [userData, setData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response);
                setData(response.data)
            })
    })
    return (
        <div>
            {
                userData.map((item) => {
                    return (
                        <div>{item.name}</div>
                    )
                })
            }
        </div>
    )
}
export default AxiosGet;