import cafe from '../assets/banner-cafe.jpg'
import '../css/banner.css'

function Banner() {
    return (
        <div className="container-fluid p-0">
            <img src={cafe} alt="café" class="img-banner"/>
        </div>
    ) 
}

export default Banner;