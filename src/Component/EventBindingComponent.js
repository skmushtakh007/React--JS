export default function EventBindingComponent(){
   var username="John";
    return(
        <div className="container">
            <h2>User Details</h2>
            User Name:
            <input type="text" value={username} />
            <br />
            Hello..! {username}
        </div>
    )
}