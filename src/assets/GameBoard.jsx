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

    const colVictoryCheck = (colIndex, currentColor, boardToCheck) => {
        let count = 0;
        // רצוי להשתמש באורך האמיתי של המערך כדי למנוע טעויות
        for (let i = 0; i < boardToCheck.length; i++) {
            if (boardToCheck[i][colIndex].color === currentColor) {
                count++;
                if (count === 4) return true;
            } else {
                count = 0;
            }
        }
        return false;
    };

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
        if (winner) return;

        // העתקה עמוקה ומלאה של הלוח כדי ש-React יזהה שינוי
        const newBoard = board.map(r => r.map(c => ({ ...c })));
        const playerColor = currentPlayer === 1 ? colorP1 : colorP2;
        let found = false;

        for (let i = rows - 1; i >= 0; i--) {
            if (newBoard[i][colIndex].color === "white") {
                newBoard[i][colIndex].color = playerColor;
                found = true;
                break;
            }
        }
        if (found) {
            // 1. קודם כל בודקים ניצחון על המערך החדש (newBoard)
            const isWin = colVictoryCheck(colIndex, playerColor, newBoard);
            // 2. מעדכנים את הלוח בתצוגה
            setBoard(newBoard);

            if (isWin) {
                setWinner(currentPlayer);
                // השהייה קלה כדי שהמשתמש יראה את הצבע משתנה לפני ה-Alert
                setTimeout(() => alert("Player " + currentPlayer + " Wins!"), 100);
            } else {
                // 3. עוברים שחקן רק אם אין ניצחון
                setCurrentPlayer(p => (p === 1 ? 2 : 1));
            }
        }
    };

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