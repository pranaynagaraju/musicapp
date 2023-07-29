import "./styles.css";
import React, { useState } from "react";
import sakhiimg from "./assets/Sakhi.jpg";
import sakhi from "./assets/Pachchadanamey.mp3";
import Player from "./Player";
import nani from "./assets/Ninnu-Kori.jpg";
import nanis from "./assets/Adiga Adiga.mp3";
import nani2 from "./assets/Ninnu2.jpg";
import nanis2 from "./assets/Unnatundi Gundey.mp3";
import playbutton from "./assets/play-button.png";
import RajaRani from "./assets/Raja-Rani.jpg"
import RajaRanis from "./assets/Vinave Vinave.mp3" 
import orange from "./assets/Orange.jpg"
import oranges from "./assets/Chilipiga.mp3"
import Arjun from "./assets/Arjun-Reddy.jpg";
import Arjuns from "./assets/Oopiri Aaguthunnadhey.mp3";
export default function App() {
  const [image, setImage] = useState("");
  const [song, setSong] = useState("");
  const [name, setName] = useState("");

  const arr = [
    { name: "Vinave Vinave", song: RajaRanis, imagem: RajaRani },
    { name: "Pachchadanamey", song: sakhi, imagem: sakhiimg },
    { name: "Adiga Adiga", song: nanis, imagem: nani },
    { name: "Unnatundi Gundey", song: nanis2, imagem: nani2 },
    { name: "Chilipiga", song: oranges, imagem:orange  },
    { name: "Oopiri Aaguthunnadhey", song: Arjuns, imagem:Arjun  },
  ];
  console.log(sakhi);
  function changeHandler(img, name, song) {
    setImage(img);
    setName(name);
    setSong(song);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="container1" style={{ overflowY:"scroll" }}> 
        <nav>
          {" "}
          <h2 style={{ textAlign: "center", fontSize: "40px",marginLeft:"250px" }}>
            Music Player    
          </h2>
          <h2 style={{ textAlign: "center", fontSize: "15px", marginTop:"16px",marginLeft:"4px",color:"rgb(219,43,66)", fontWeight:"bold" }}>
            by Pranay Nagaraju
          </h2>
        </nav>
        <br />
        <div style={{ padding: "10px"}}>
          {arr.map((item) => (
            <>
              <div
                style={{ borderRadius: "15px", textOverflow: "ellipsis",outline: "2px solid black" }}
                className="musiccont"
                key={item.name}
              >
                <h2
                  style={{
                    width: "400px",
                    marginLeft: "20px",
                    fontSize: "30px",
                    
                  }}
                >
                  {" "}
                  {item.name}
                </h2>
                <button
                  onClick={() =>
                    changeHandler(item.imagem, item.name, item.song)
                  }
                  style={{
                    width: "100px",
                    height: "40px",
                    fontSize: "30px",
                    borderRadius: "5px",
                    border: "2px solid black",
                  }}
                >
                  Play
                  <span>
                    <img
                      style={{
                        marginLeft: "5px",
                        marginTop: "2px",
                        width: "20px",
                        height: "20px",
                      }}
                      src={playbutton}
                      alt="play"
                    />
                  </span>
                </button>
                <img
                  style={{ margin: "10px" }}
                  className="musicselectimg"
                  src={item.imagem}
                  alt="img"
                />
              </div>
              <br />
            </>
          ))}
        </div>
      </div>

      <Player name={name} audiofile={song} image={image} />
    </div>
  );
}
