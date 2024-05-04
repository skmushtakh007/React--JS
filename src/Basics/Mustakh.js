import { getImageUrl } from './utills'

function AlertButton({message,children}){
    return(
        <button onClick={()=>alert(message)}>
            {children}
        </button>
    )
}
export default function Mustakh() {
    return (
        <div>
      <AlertButton message="Playing">
        Play song
      </AlertButton>
      <AlertButton message="uploading">
        Upload song
      </AlertButton>
    </div>
    )
}