import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";


import LogOut from './LogOut.js';
import { axiosWithAuth } from "../axiosWithAuth";

import Picture from './Picture';

class ScoreBoard extends React.Component {

    state = {
        score: 0,
        navigate: false
    }

    calculateScore = () => {
        var value = parseInt(localStorage.getItem("score"));
        if (localStorage.getItem("count") > 0 ) {
            var value2 = parseInt(localStorage.getItem("count"));
            return Math.round((value / value2) * 100)
        } else {
            return 100
        };

        
    }



    render () {


        const { navigate } = this.state

        if (navigate) {
            return <Redirect to="/login" push={true} />
        }

        return (
            <>
            <div>
                <h1>ScoreBoard</h1>
                <h2>score: {localStorage.getItem("score")}</h2>
                <p>count: {localStorage.getItem("count")}</p>
                <p>score: {this.calculateScore()}%</p>
            </div>
    
           <LogOut />
            </>
        )
    }
}

export default ScoreBoard;