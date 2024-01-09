import './App.css';
import {useState} from "react";
import {SquareStatus} from "../types";
import BigSquare from "../components/Square/BigSquare";


function App() {
    const [squares, setSquares] = useState<SquareStatus[]>(
    );

    const data = () =>{
        const newSquare:SquareStatus[] = [];
        for(let i = 0; i < 36; i++){
            newSquare.push({hasItem:false, clicked:false});
        }
        const hidden:number = Math.floor(Math.random() * (newSquare.length - 0));
        newSquare[hidden].hasItem = true;
        return newSquare;
    };

    if(!squares){
        setSquares(data());
    }

    const openSquare = (key:number)=>{
        const squaresCopy:SquareStatus[] = [...squares!];
        const squareCopy = {...squaresCopy[key]};
        squareCopy.clicked = true;
        squaresCopy[key] = squareCopy;
        setSquares(squaresCopy);
    };

    return (
        <div className="board">
        <BigSquare squaresData = {squares}
         openSquare = {openSquare}/>
        </div>
    );
}

export default App;
