import React, {useEffect, useState } from 'react';
import useForm from "react-hook-form";
import styled from "styled-components";
import Axios from "axios";


const CelebCard = () => {
    const [celebLife, setCeleb] = useState([]);

    useEffect(() => {
        Axios
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
    <Logo><a href="https://doa2.netlify.com/"><img src="https://i.imgur.com/Kc4PN2y.png"></img></a></Logo>
    <Tagline>...(not)quite dead yet?</Tagline>
    <CelebImg></CelebImg>
    <Name></Name>
    <Dead></Dead>
    <Alive></Alive>
    </FormBox>
);
}
export default CelebCard;