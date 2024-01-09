import React from 'react';



interface Props{
    resetBoard:React.MouseEventHandler;
}
const Reset:React.FC<Props> = (props) => {
    return (
        <>
            <button onClick={props.resetBoard}>
            Reset
            </button>
        </>
    );
};

export default Reset;