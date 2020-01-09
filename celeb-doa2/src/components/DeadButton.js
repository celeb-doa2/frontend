import React from "react";


const DeadButton = (props) => {
    
    if (props.celeb.death !== 0) {
        return ("Died: ", props.celeb.death)
    }
        return ("Alive!")
}

export default DeadButton;