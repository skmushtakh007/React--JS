import Video from "./Video"

export default function Appy(){
    let videos=[{
        id:1,
        title:"React Js Tutorial",
        channel:"Code with harry",
        views:"1M",
        time:"10 month ago",
        varified:true
    },
    {
        id:2,
        title:"JavaScript Tutorial",
        channel:"Code with harry",
        views:"1M",
        time:"10 month ago",
        varified:true
    },
    {
        id:3,
        title:"MongoDB tutorial",
        channel:"Code with harry",
        views:"1M",
        time:"10 month ago",
        varified:true
    }
]
    return(
        <div>
            {
                videos.map((x)=>
                    <Video
                    title={x.title}
                    channel={x.channel}
                    views={x.views}
                    time={x.time}
                    />
                )
            }
        </div>
    )
}