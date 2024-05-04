 import  './Video.css';


export default function Video({title,id,channel,views,time,varified}){
    
    return(
        <div className="container1">
            <div className="pic"><img src={`https://picsum.photos/id/160/90`}  alt="" /></div>
            <div className="title">{title}</div>
            {varified?<div className='channel'> {channel} true</div>:null}
            <div className="views">{views} <span> .</span> {time}</div>
        </div>
    )
}