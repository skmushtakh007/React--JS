
import React from "react";
// creating life cycle
class SuccessComponent extends React.Component{
    //Applying life cycle
    componentDidMount(){
        alert('Success component will render')
    }
    componentWillUnmount(){
        alert('Succes Component will unmount');
    }
    render(){
        return(
            <div>
                <h2>Login Success..</h2>
            </div>
        )
    }
}
class ErrorComponent extends React.Component{
    componentDidMount(){
        alert('Error component will render')
    }
    componentWillUnmount(){
        alert('Error Component will unmount');
    }
    render(){
        return(
            <div>
                <h2>Invalid Login..</h2>
            </div>
        )
    }
}
export default class LifeCycleDemo extends React.Component{
    constructor(props){
        super(props);
        //Defining state
        this.state={
            userDetails:{
                UserName:'jogn_nit',
                Password:'john@11'
            },
            formDetails:{
                UserName:'',
                Password:''
            },
        }
        // if u are using state for events for class then u need to bind them in class
        this.handleUserName=this.handleUserName.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleLoginClick=this.handleLoginClick(this);
    }
    //verifying UserName and Password
    handleUserName(event){
        this.setState({
            formDetails:{
                UserName:event.target.value,
                Passward:this.state.formDetails.Password
            }
        })
    }
    handlePassword(event){
        this.setState({
            formDetails:{
                UserName:this.state.formDetails.UserName,
                Passward:event.target.value
            }
        })
    }
    handleLoginClick(){
        if(this.state.formDetails.UserName==this.state.userDetails.UserName && this.state.formDetails.Password==this.state.userDetails.Password)
        {
            this.setState({
                result:<SuccessComponent/>
            })
        }
        else{
            this.setState({
                result:<ErrorComponent/>
            })
        }
    }
    render(){
        return(
            <div>
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={this.handleUserName} type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input onChange={this.handlePassword} type="text" /></dd>
                    <button onClick={this.handleLoginClick}>Login</button>
                    <div>{this.state.result}</div>
                </dl>
            </div>
        )
    }
}