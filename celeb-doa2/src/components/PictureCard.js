import React, {useState, useEffect} from 'react';
import Modal from './Modal';

const PictureCard = props => {


  const [score, setScore] = useState(0);
  const [isOpen, setIsOpen] = useState(false);






  function handleClickDead(e) {
      // Get the value from local storage
  var value = parseInt(localStorage.getItem("score"));

  var value = parseInt(localStorage.getItem("count"));
  var newValue = value + 1;
  

  // Incrememtnt the count by 1
  // var newValue = value + 1

  //Write the value back to local storage
  // localStorage.setItem("score", newValue);

    
    
    if (props.data.death !== 0) {
      var value = parseInt(localStorage.getItem("score"));
      var value2 = parseInt(localStorage.getItem("count"));
      var newValue = value + 1;
      var newValue2 = value2 + 1;
      console.log(props.data.death);
      localStorage.setItem("score", newValue);
      localStorage.setItem("count", newValue2);
      alert('correct');
      setIsOpen({ isOpen: isOpen })
      window.location.reload(false);
      
    } else {
      alert('wrong');
      var value2 = parseInt(localStorage.getItem("count"));
      var newValue2 = value2 + 1;
      localStorage.setItem("count", newValue2);
      console.log(props.data.death)
      setIsOpen({ isOpen: isOpen })
      console.log(isOpen, "isOpen?")
      window.location.reload(false);
    };
  }
  function handleClickAlive(e) {
    
    if (props.data.death === 0) {
      var value2 = parseInt(localStorage.getItem("count"));
      var newValue2 = value2 + 1;
      localStorage.setItem("count", newValue2);
      var value = parseInt(localStorage.getItem("score"));
      alert('correct');
      var newValue = value + 1;
      localStorage.setItem("score", newValue);
      console.log(props.data.death);
      setIsOpen({ isOpen: isOpen })
      window.location.reload(false);
      
    } else {
      var value2 = parseInt(localStorage.getItem("count"));
      var newValue2 = value2 + 1;
      localStorage.setItem("count", newValue2);
      alert('wrong');
      console.log(props.data.death);
      setIsOpen({ isOpen: isOpen })
      window.location.reload(false);
    };
  }

  function handleReset() {
    localStorage.setItem("score", "0");
    localStorage.setItem("count", "0");
    window.location.reload(false);
  }

  function handleOpenModal () {
    setIsOpen({ isOpen: !isOpen })
    console.log("open")
  }
 
  return (
    <div className='picturecard' >
      {console.log(props, 'props')}
      {console.log(props,'isDead?')}
      <h1>{props.data.name}</h1>
      {console.log(window.localStorage)}
      <div>
         <img alt='celeb' src={props.data.image_url}/>
      </div>
      
      
      <div>
        {/* <button onClick={() => window.location.reload(false)}>Dead</button>
        <button onClick={() => window.location.reload(false)}>Alive</button> */}
        <button onClick={handleClickDead}>Dead</button>
        <button onClick={handleClickAlive}>Alive</button>
        <button onClick={handleReset}>Start Over</button>
      </div>
      <div >
        <button onClick={handleOpenModal}>Open Modal</button>
        {console.log(isOpen, "isOpen???????")}
        <Modal 
          isOpen={isOpen}
          onRequestClose={handleOpenModal}
        />
      </div>



      
    </div>
  );
};
export default PictureCard;