import { useNavigate } from "react-router"
import AnimatePage from "./AnimatePage"



const Home = () => {
    const navigate = useNavigate()
    
  return (
    <div>
        <AnimatePage> 
            <div>
                <div>
                    <h2>Build minimally</h2>
                </div>  
                <div>
                    <h2>Deploy minimally</h2>
                </div>
                <button 
                    onClick={() => navigate('/contact') }
                >Start</button>
            </div>     
        </AnimatePage>
    </div>
  )
}

export default Home
