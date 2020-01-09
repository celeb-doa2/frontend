import React, {useEffect, useState } from 'react';
import useForm from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import Button from "./Button";

const CelebCard = () => {

    const FormBox = styled.form`
        width: 437px;
        height: 450px;
        padding: 2%;
        background-color: #7F74FF;
        border-radius: 10px;
        margin: 2%;
        align-items: center;
        box-shadow: -5px 5px 15px #3A3574;
    `;

   const Logo = styled.a`
        display: flex;
        flex-direction: row;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        width: 50%;      
   `;

   const Tagline = styled.h3`
        font-size: 1.5em;
        text-align: center;
        line-height: 1;
        paddding: 0%;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: #18E7DD;
        text-shadow: -3px 3px #3A3574;
        -webkit-text-stroke: 0.5px #03E490;    
   `;

   const Name = styled.p`
        font-size: 1.5em;
        text-align: center;
        line-height: 1;
        paddding: 0%;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: #18E7DD;
        text-shadow: -3px 3px #3A3574;
        -webkit-text-stroke: 0.5px #03E490;    
   `;

    const [celeb, setCeleb] = useState([]);
    useEffect(() => {
        axios
        .get("https://celeb-death-game.herokuapp.com/api/free")
        .then(res => {
            console.log("API response: ", res.data)
            setCeleb(res.data)
        })
        .catch(err => {
            console.error("ERROR", err)
        })
    }, []);
 
    return (
        <FormBox>
        <form>
            <Logo><a href="https://doa2.netlify.com/"><img src="https://i.imgur.com/Kc4PN2y.png"></img></a></Logo>
            <Tagline><h3>...(not)quite dead yet?</h3></Tagline>
            <Name><p>{celeb.name}</p></Name>
            <img className="image" src={celeb.image_url}></img>
            <p>Born: {celeb.birth} - ???</p>
            <p><Button label="ALIVE"></Button> OR <Button label="DEAD"></Button></p>

        </form>
        </FormBox>
    );
    
}
export default CelebCard;