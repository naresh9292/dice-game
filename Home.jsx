import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
           <div className="container-item">
            <div className="dice-image">
            <img src="dices 1.png" alt="dices image" />
           </div>
           <div className="home-text">
            <h1>DICE GAME</h1>
            <Link to="/play"><button>Play Now</button></Link>
           </div>
           </div>

        </div>
    )
}

export default Home;