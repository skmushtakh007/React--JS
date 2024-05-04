
const Parenty =({name,age})=>{
    return(
        <section>
            <h2>Todo's </h2>
            <h2>{name}</h2>
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol fuelled engine</li>
            </ul>
        </section>
    );
}
export default Parenty;
Parenty.defaultProps={
    name:'hello',
    age:89
}
