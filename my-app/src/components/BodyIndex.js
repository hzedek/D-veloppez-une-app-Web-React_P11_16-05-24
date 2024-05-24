import DisplayBanner from '../assets/displayBanner.jpg'
import '../styles/BodyIndex.scss'


function Display() {
    return <img src={DisplayBanner} alt="bannière"></img> 
}



function BodyIndex() {
    return <div><Display /></div>
}

export default BodyIndex