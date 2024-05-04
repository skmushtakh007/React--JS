
import {contextName,contextName1} from './Index'

export default function ChildC(){
    return(
        <div>
            <contextName.Consumer>
                {
                    (fname)=>{
                        return(
                            <contextName1.Consumer>
                                {
                                    (lname)=>{
                                        return(
                                            <h2>{fname} and {lname}</h2>
                                        )
                                    }
                                }
                            </contextName1.Consumer>
                        )
                    }
                }
            </contextName.Consumer>
        </div>
    )
}