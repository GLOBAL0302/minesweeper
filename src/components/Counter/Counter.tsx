import {SquareStatus} from "../../types";
import React from "react";

interface Props{
    value?: SquareStatus[];
}
const Counter:React.FC<Props> = (props) => {
    const tries = props.value!.filter(item =>{
        return item.clicked == true;
    });
    return (
        <div>
            <p><strong>Tries:</strong> {tries.length}</p>
        </div>
    );
};

export default Counter;