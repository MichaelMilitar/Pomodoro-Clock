import React from 'react'

function SessionLength(props){
    function decreaseSession() {
        if (props.sessionInterval === 60){
            return;
        }
        props.decreaseSession();
    }
    function increaseSession() {
        if (props.breakInterval === 1){
            return;
        }
        props.increaseSession();
    }
    return (
        <section>
            <h4>Session Length</h4>
            <section className = "interval-container">
                <button onClick = {decreaseSession}>-</button>
                <p className = "interval-length">{props.SessionLength}</p>
                <button onClick = {increaseSession}>+</button>
            </section>
        </section>
    );  
}

export default SessionLength;