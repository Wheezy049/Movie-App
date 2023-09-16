// import React, { useState, useEffect } from "react";

// function Movie() {

//   const getMovie = async () => {
//     const apiKey = "92f8b953924986d58342cb1af16cf22c"
//     const url = 'https://api.themoviedb.org/3/movie/top_rated'

//     const response = await fetch(`${url}?api_key=${apiKey}`);
//     const data = await response.json();
//     console.log(data)
//     setCard(data)
//     //   return (
//     //     <div>
//     //       <div>
//     //         <h1>Movie Box</h1>
//     //       </div>
//     //       <div className="grid-container">
//     //         {data.map((data) => {
//     //           return (
//     //             <div className="grid-item">
//     //               <div>{title}</div>
//     //             </div>
//     //           )
//     //         })}
//     //       </div>
//     //     </div>
//     //   )
//   }

//   const [card, setCard] = useState([])

//   useEffect(() => {
//     getMovie()
//   }, [])

//   return (
//     // <ul>
//     //   {card.results.map((product, index) => (
//     //     <li key={index}>{product.id} | {product.title}</li>
//     //   ))}
//     // </ul>

//     <>
//       {
//         card?.results?.map((product, index) => {
//           return (
//             <div key={index}>
//               <img src={`http://image.tmdb.org/t/p/w500${product.poster_path}`} alt="mag" />{product.title}
//             </div>
//           );
//         })
//       }
//     </>

//   )

// }

// export default Movie

import React from "react";
import chevron from "../Chevron right.svg";
import { useNavigate } from "react-router-dom";


{/* <div className="feature">
        <h1>Featured Movie</h1>
        <div>
          <p>See more</p>
          <img src={chevron} alt="chevron" />
        </div>
      </div> */}


const API_IMG = "http://image.tmdb.org/t/p/w500/";

const Movie = ({ title, release_date, poster_path, overview, id }) => {
  const navigate = useNavigate();
  const onClickMovie = () => {
    console.log(id)
    navigate('/movie', { state: { title, release_date, poster_path, overview, id } })
  }
  return (

    <div className="card-poster" onClick={() => onClickMovie()}>
      <img width={'250px'} height={'370px'} src={API_IMG + poster_path} alt="" />
      <h1>{title}</h1>
      <p>{release_date}</p>
    </div>

  );
};

export default Movie;
