import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Homepage.css';
import imdb_logo from '../assets/img/imdb_logo.png';
import tomatoes_img from '../assets/img/tomatoes.png';
import heart from '../assets/img/heart.svg';
import { getGenreName } from "../utilis";


const API_IMG = 'https://image.tmdb.org/t/p/w500/';



const MovieBox = ({movie, title, poster_path, vote_average, release_date, overview, id, genre_ids}) => {

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
      };
    
      const imageStyle = {
        backgroundColor: isClicked ? 'rgb(201, 210, 37)' : '',
        transition: 'background-color 0.3s ease',
      };

      const releaseDate = new Date(release_date);
      const utcDate = releaseDate.toUTCString();
    return(
        <>
        
        <div  data-testid= "movie-card">
            <div className="" >

                <img src={heart} alt="heart_icon" width="30px" height="30px" className="heart" style={imageStyle} onClick={handleClick}/>


                <img className="movie_poster" src={API_IMG+poster_path} alt="movie_poster" data-testid= "movie-poster"/>
            </div>
            <div className="">
                <p className="region label" data-testid= "movie-release-date">USA, {utcDate}</p>

                <h1 key={id}><Link to={`/movies/${id}`} className="text-dark text-decoration-none movie_title" data-testid= "movie-title">{title}</Link></h1>
                <div className="ratings">
                    <div className="imdb">
                        <img src={imdb_logo} alt="imdb_Logo"/>
                        <p>{vote_average * 10} / 100</p>
                    </div>
                    <div className="tomatoes">
                        <img src={tomatoes_img} alt="rottenTomatoes_Logo"/>
                        <p>{vote_average * 10}%</p>
                    </div>
                </div>
                <p className="label">{
        genre_ids.map((genre, index) => (
          <span
          key={genre}
          className="mr-2 text-sm text-gray-600"
          >
            {getGenreName(genre)}
            {index !== genre_ids.length - 1 ? ", " : ""}
          </span>
        ))
      }</p>
            </div>
        </div>
    </>
    )
}

export default MovieBox;