// import React, {useEffect, useState } from 'react';
// import axios from "axios";
// import CelebCard from './CelebCard';


//     const AliveButton = () => {
//         const [life, setLife] = useState([]);
       
//         useEffect(() => {
//              axios
//               .get(`https://celeb-death-game.herokuapp.com/api/free`)
//               .then(res => {
//                 setLife(res.data);
//               })
//               .catch(err => {
//                 console.error("ERROR", err)
//               });
      
//         },[]);
//         const AliveTest = () => {
//             if (life.dead === false) {
//            return alert("Alive!");
//         } else{
//            return alert("Died: ", life.death);
//         }
//     }
//     return AliveTest;
// }   

    
// export default AliveButton;