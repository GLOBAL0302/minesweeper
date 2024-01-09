import React from "react";
import SmallSquare from "./SmallSquare";
import {SquareStatus} from "../../types";


interface Props{
    squaresData?: SquareStatus[];
    openSquare: (key:number)=>void;
}

const BigSquare: React.FC<Props> = (props) => {
    return (
       <div className="board">
           {props.squaresData?.map((square, index)=>{
               return(
                       <SmallSquare
                        squareData = {square}
                        key = {index}
                        openSquare = {()=>{
                            props.openSquare(index);
                        }}
                       />
               );
           })}
       </div>
    );
};

export default BigSquare;