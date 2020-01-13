import React, { useEffect, useState } from "react";
// import {Link} from 'react-router-dom';
import Timer from "react-compound-timer";
import styled from "styled-components";

export default function Timers() {
    const Hours = styled.p`
    font-size: 2em;
    text-align: center;
    line-height: 1;
    padding: 0%;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #FCFC32;   
    `;
    const Mins = styled.p`
    font-size: 2em;
    text-align: center;
    line-height: 1;
    padding: 0%;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #FCFC32;   
    `;
    const Secs = styled.p`
    font-size: 2em;
    text-align: center;
    line-height: 1;
    padding: 0%;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #FCFC32;   
    `;



console.log('timer');

return (
    <section>
<div className="tFormat"><Timer class="timer" formatValue={(value) => `${(value < 10 ? `0${value}` : value)} units `}>
                   <Hours><Timer.Hours formatValue={value => `Timer : ${value}:`} /></Hours>
                 <Mins><Timer.Minutes formatValue={value => `${value}:`} /></Mins>
                    <Secs><Timer.Seconds formatValue={value => `${value}`} /></Secs>
                </Timer></div>
                </section> 
    )
}