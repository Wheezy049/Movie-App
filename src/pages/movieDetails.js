import React from "react";
import { useLocation } from "react-router-dom";

function MovieDetails() {
 const { state } = useLocation();
 const { title, release_date, poster_path, overview, id } = state;
 return (
  <div>
   {id}
   {title}

  </div>
 )
}

export default MovieDetails;