import React, { useEffect, useState } from "react";
import PictureCard from "./PictureCard";
import "../css/picture.css";

import axios from "axios";

export default function Picture(props) {
  const [pictureData, setPictureData] = useState("");
  const [score, setScore] = useState(0);

  async function fetchData() {
    await axios
      .get(`https://celeb-death-game.herokuapp.com/api/free`)
      .then(res => {
        console.log(res.data.image_url, "DATA");
        console.log(res.data.death, "DATA");
        setPictureData(res.data);
      })
      .catch(err => {
        console.log("data error", err);
      });
  }

  useEffect(() => {
    fetchData();
  }, [setPictureData]);

  // useEffect(() => {
  //     axios.get(`https://celebs-dead-or-alive.herokuapp.com/celebs`)
  //     .then(res => {
  //         console.log(res.data);
  //         setPictureData(res.data);
  //         console.log()

  //     })
  //     .catch(err => {
  //         console.log('data error', err)
  //     })
  // }, [])

  return (
    <div className="picture">
      {/* {pictureData.map(item => {
                return (
                    <PictureCard 
                        key={item.id}
                        name={item.name}
                        image_url={item.image_url}
                    />
                )
            })} */}
      <PictureCard data={pictureData} score={score} />

      {/* <PictureCard picture={pictureData[pictureIndex]} /> */}
    </div>
  );
}
