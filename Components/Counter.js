import Countdown from "react-countdown";


export default function Counter(){
    return(
        <Countdown date={Date.now() + 100000000} />
        
    )

}