import {useState} from "react";
import "./GameBoard.css"



function GameBoard({switchToSettings,row,col, currentPlayer,setCurrentPlayer}){
    const rows=Number(row);
    const cols=Number(col);
    const [winner,setWinner] = useState(null);

const moveToSettings = ()=> {
   if(winner !==null){
        return switchToSettings ();

   }
}
const createBoard =()=>{
    const newBoard=[];
    for (let i = 0; i < rows; i++){
        const tempRow = []
        for (let j = 0; j < cols; j++){
            tempRow.push({value:"",color:"white"});
        }
        newBoard.push(tempRow);

    }
    return newBoard;
}
    const [board,setBoard]= useState(createBoard);

    return(

        <div>
            <h1> LET'S PLAY </h1>
            <h3>
                GAME SCREEN
            </h3>

       <h3>Current Player:{currentPlayer}</h3>
            <div className="board">
                {board.map((row, r)=> (
                    <div className="board-row" key={r}>
                        {row.map((col,c)=> (
                            <div className="board-col"
                            key={c}
                            style = {{backgroundColor:col.color}}>
                                {col.value}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        <div>
            <br/>
            <button onClick={moveToSettings}>
                GO TO SETTINGS
            </button>

        </div>

      </div>
    )
}
export default GameBoard;