import React from "react";
import tv from "../tv.png";
import search from "../Search.svg";
import menu from "../Menu.svg";
import imob from "../imob.png";
import pngItem from "../PngItem.png";
import play from "../Play.svg";

function Poster() {
 return (
  <div className="poster">
   <div className="header">
    <div className="logo">
     <img src={tv} alt="logo" />
     <h3>MovieBox</h3>
    </div>
    <div className="search">
     <input type="search" name="" id=""></input>
     <img src={search} alt="search_icon" />
    </div>
    <div className="sign_in">
     <p>Sign In</p>
     <img src={menu} alt="menu" />
    </div>
   </div>
   <div className="poster-text">
    <div className="johnWick">
     <h2>John Wick 3 :</h2>
     <h2 style={{ marginTop: '-30px' }}>Parabellum</h2>
     <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img width={'20px'} height={'20px'} src={imob} alt="imob" />
      <p>86.0 / 100</p>
      <img width={'20px'} height={'20px'} src={pngItem} alt="pngItem" />
      <p>97%</p>
     </div>
     <p>
      John Wick is on the run after killing a member <br /> of the
      international assassins' guild, and with <br /> a $14 million price
      tag on his head, he is the <br /> target of hit men and women
      everywhere.
     </p>
     <button>
      <img src={play} alt="play" />
      <p>Watch Trailer</p>
     </button>
    </div>
    <div className="number">
     <p>1</p>
     <p>2</p>
     <p>3</p>
     <p>4</p>
     <p>5</p>
    </div>
   </div>
  </div>
 );
}

export default Poster;
