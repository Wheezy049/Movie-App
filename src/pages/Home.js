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
import { useState, useEffect } from "react";
import Movie from '../components/Movie';
import Poster from "../components/Poster";


const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=92f8b953924986d58342cb1af16cf22c`

const Home = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        // console.log(data)
        setMovie(data.results)
      })
  }, [])
  return (
    <div>
      <div>
        <Poster />
      </div>
      <div className="card-container">
        {movie && movie.map((movieReq) =>
          <Movie key={movieReq.id} {...movieReq} />)}
      </div>
    </div>
  )
}

export default Home;