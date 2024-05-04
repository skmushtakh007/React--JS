import { useEffect, useReducer, useState } from "react";
var initialState = {
    like: 0,
    dislike: 0
};
function reducer(state, action) {
    switch (action.type) {
        case 'like':
            return { like:parseInt(state.like) + 1, dislike:state.dislike };
        case 'dislike':
            return { dislike:parseInt(state.dislike) + 1, like:state.like };

    }
}

export default function ReducerDemoFetch() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [product, setProduct] = useState({});
   
    
    useEffect(() => {
        fetch("http://fakestoreapi.com/products/2")
            .then(reponse => reponse.json())
            .then(data => {
                setProduct(data)
            })
    }, [])
    function handleLikeClick() {
        dispatch({ type: 'like' });
    }
    function handleDislikeClick() {
        dispatch({
            type: 'dislike'
        });
    }
    return (
        <div className="container-fluid">
            <h2>Likes Counter{product.title}</h2>
            <div className="card p-2" style={{ width: '300px' }}>
                <img src={product.image} className="card-img-top" height="160" alt="" />
                <div className="card-header">
                    <p>{product.title}</p>
                </div>
                <div className="card-footer">
                    [{state.like}]<button className="btn btn-primary" onClick={handleLikeClick}><span className="bi bi-hand-thumbs-up"></span></button>
                    [{state.dislike}]<button className="btn btn-danger" onClick={handleDislikeClick}><span className="bi bi-hand-thumbs-down"></span></button>
                </div>
            </div>

            {/* <button onClick={() => { dispatch({ type: 'like' }) }}>Like</button>
            <button onClick={() => { dispatch({ type: 'dislike' }) }}>DisLike</button> */}
        </div>
    )
}