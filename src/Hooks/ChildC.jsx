import React from 'react'
import {data ,data1} from './ChildA'
export default function ChildC(){
    return(
        <div>
            <data.Consumer>
                {
                    (firstname)=>{
                        return(
                            <data1.Consumer>
                                {
                                    (lastname)=>{
                                        return(<h2>My Firstname is {firstname} and my Lastname is {lastname}</h2>)
                                    }
                                }
                            </data1.Consumer>
                        )
                    }
                }
            </data.Consumer>
        </div>
    )
}