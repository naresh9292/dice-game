import { Link } from "react-router-dom";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

function PlayGame() {
    return (
        <div className="container">
            <div className="game-head">
                <div>
                     <TotalScore />
                </div>
                <div>
                   <NumberSelector />
                </div>
            </div>
            <main>
                <div className="sec-one">
                    <div className="dice-12">
                       <RollDice />
                    </div>
                    <p className="text-xl ml-5 mt-4 font-bold">Click On Dice To Roll</p>
                    <div>
                        <button className="btn-1">Reset Score</button>
                    </div>
                    <div>
                        <Link to="/rule"><button className="btn-2">Show Rules</button></Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PlayGame;