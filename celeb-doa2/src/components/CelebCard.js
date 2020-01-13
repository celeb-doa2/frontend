/* eslint-disable */
import React, {useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import Button from "./Button";
import Timers from "./Timer";


const CelebCard = (props) => {
    const Card = styled.section`
        display: grid;
        place-items: center;
        height: 70vh;
    `;
    const FormBox = styled.form`
        width: 415px;
        height: 780px;
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
        margin-left: 27%;
        margin-right: 27%;
            
   `;
   const Tagline = styled.h3`
        font-size: 1.5em;
        text-align: center;
        line-height: 1;
        padding: 0%;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: #18E7DD;
        text-shadow: -3px 3px #3A3574;
        -webkit-text-stroke: 0.5px #03E490;    
   `;
   const Name = styled.p`
        font-size: 2.75em;
        text-align: center;
        line-height: 1;
        padding: 0%;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: white;
            
   `;
   const CelebPic = styled.image`
        display: flex;
        flex-direction: row;
        margin-left: 30%;
        margin-right: 30%;
        width: 150%;   
        border-radius: 15px;   
   `;
   const Born = styled.p`
        font-size: 1.75em;
        text-align: center;
        line-height: 1;
        padding: 0%;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: white;   
`;
        const Known = styled.p`
        font-size: 1.25em;
        text-align: center;
        line-height: 1;
        padding: 0%;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: white;   
        `;

    const [celeb, setCeleb] = useState([]);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        getNewCeleb();

    }, []);

    function getNewCeleb() {
        axios
        .get("https://celeb-death-game.herokuapp.com/api/free")
        .then(res => {
            console.log("API response: ", res.data)
        setCeleb(res.data)
        })
        .catch(err => {
            console.error("ERROR", err)
        })
        Timers();
    }


    const AliveTest = () => {
        if (celeb.dead === false) {
            console.log(celeb.name, "is alive!");
            alert(`Yes, ${celeb.name} is still alive!`);
            handleScore();
            console.log(`the score: ${count}`);               

        } else{
            console.log(celeb.name, 'died in', celeb.death);
            alert(`No... ${celeb.name} died in ${celeb.death}`);
        }
        getNewCeleb();
    }
    const DeadTest = () => {
        if (celeb.dead === true) {
            console.log(celeb.name, "is dead!");
            alert(`Yes, sadly ${celeb.name} died in ${celeb.death}.`);
            handleScore();
        } else {
            console.log(celeb.name, "is alive!");
            alert(`No Sorry! ${celeb.name} is still alive and kicking!`);
         
        }
        getNewCeleb();
    }

    return (
        <section>
        <Timers />
        <Tagline>Score: {count}</Tagline>
        <Card>
        
        <FormBox><div>
            <Logo><a href="https://doa2.netlify.com/"><img src="https://i.imgur.com/Kc4PN2y.png"></img></a></Logo>
                <Tagline>...(not)quite dead yet?</Tagline>
                <Name>{celeb.name}</Name>
                <CelebPic><img src={celeb.image_url} className="image" alt="celebPic"></img></CelebPic>
                <Born>Born: {celeb.birth} - ???</Born>
                <Known>Occupation: {celeb.info}</Known></div>              
                <div className="butt"><Button type="button" label="ALIVE" onClick={AliveTest}></Button>
                <Button type="button" label="DEAD" onClick={DeadTest}></Button></div>
        </FormBox>
        </Card>
        </section>
        
        

    );
     
}
export default CelebCard;
