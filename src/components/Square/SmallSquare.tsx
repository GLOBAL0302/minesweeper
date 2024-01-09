import "./BigSquare.css";
import React from "react";
interface qwe{
    squareData:boolean;
    key: number;
    openSquare:React.MouseEventHandler;
}


const SmallSquare: React.FC<qwe> = (props) => {
    const squareName:string[] = ["square"];
    if(props.squareData){
        squareName.push("red");
    }


    return (
        <>
            <div className={squareName.join(" ")} onClick={props.openSquare}>

            </div>
        </>
    );
};

export default SmallSquare;