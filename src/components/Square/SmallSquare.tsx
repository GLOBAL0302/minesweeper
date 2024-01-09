import "./BigSquare.css";
import React from "react";
import {SquareStatus} from "../../types";
interface qwe{
    squareData:SquareStatus;
    key: number;
    openSquare:React.MouseEventHandler;
}


const SmallSquare: React.FC<qwe> = (props) => {
    const squareName:string[] = ["square"];
    if(props.squareData.hasItem && props.squareData.clicked){
        squareName.push("red");
        return (
            <>
                <div className={squareName.join(" ")} onClick={props.openSquare}>
                    <p>O</p>
                </div>
            </>
        );
    }

    if(props.squareData.clicked){
        squareName.push("black");
        return (
            <>
                <div className={squareName.join(" ")} onClick={props.openSquare}>
                    <p></p>
                </div>
            </>
        );
    }

    return (
        <>
            <div className={squareName.join(" ")} onClick={props.openSquare}>

            </div>
        </>
    );
};

export default SmallSquare;