import React, { useState } from 'react'
import axios from 'axios';
import { response } from 'express';
export default function AxiosPost() {
    const data={
        fname:'',
        lname:''
    }
    const[inputData,setInputData]=useState(data);
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.terget.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((response)=>{
            console.log(response)
        })
    }
  return (
    <div>
        <label>First Name:</label>
        <input type="text" name='fname' value={inputData.fname} onChange={handleData}/>
        <label htmlFor="">Last Name:</label>
        <input type="text" value={inputData.lname} onChange={handleData}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
