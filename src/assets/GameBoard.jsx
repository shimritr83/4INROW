import {useState} from "react";
import "./GameBoard.css"



function GameBoard({switchToSettings,row,col, currentPlayer,setCurrentPlayer,colorP1,colorP2,setColorP1,setColorP2 }){
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


const checkAvailabale = (rowIndex, colIndex) => {
    const newBoard = [...board] ; // מערך עזר חדש
    for (let i=rows-1; i>=0; i--){
        if (newBoard[i][colIndex].color === "white"){
            (newBoard[i][colIndex].color = colorP1);// צובע את האינדקס המסויים בשורה ועמודה ספציפיים
        }
        else {
            (newBoard[i][colIndex].color = colorP2)
        }
    }

}


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
                                 onClick={()=>checkAvailabale(r,c)}
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