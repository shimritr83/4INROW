import {useState} from "react";

function SettingsGame (){

    const [row,setRow]= useState(4);
    const [col,setCol]=useState(4);
    const [colorP1,setColorP1]=useState();
    const [colorP2,setColorP2]=useState();
    const [colors, setColors] = useState(["red","blue", "yellow", "pink", "green", "black"]) ;




    return(
        <div>
            <h1>  WELCOM TO 4 IN ROW  </h1>


            <input value={row} type={"number"} onChange={(e)=>setRow(e.target.value)}/>
            <button disabled = {row < 4 || row > 10}
            onClick={() => setRow()}>
            </button>




            <input value={col} type={"number"}  onChange={(e)=>setCol(e.target.value)}/>
            <button disabled = {col < 4 || col > 10}
            onClick={() => setCol()}>
            </button>


            {
                colors.map((color,  index)=> {

                    return (
                        <div style={{backgroundColor:color, width:50, height:50 }} key={index}></div>
                )
            })
            }
            {
                colors.map((color,  index)=> {

                    return (
                        <div style={{backgroundColor:color, width:50, height:50 }} key={index}></div>
                    )
                })
            }

            </div>
            );
           }
export default SettingsGame;