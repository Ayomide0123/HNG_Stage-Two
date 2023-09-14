import React from 'react';
import { useEffect, useState } from "react";
import logo_img from '../assets/img/tv.png';
import home_img from '../assets/img/home.png';
import movie_proj from '../assets/img/movie_proj.png';
import tv_show from '../assets/img/tv_show.png';
import calender from '../assets/img/calender.png';
import logout from '../assets/img/logout.png';
import play_icon from '../assets/img/play_button.png';
import star from '../assets/img/star.png';
import tickets from '../assets/img/tickets.png';
import list from '../assets/img/list.png';
import best_movies from '../assets/img/best_movies.png';
import down_arrow from '../assets/img/down_arrow.png';
import { useParams } from 'react-router-dom';


const API_IMG = 'https://image.tmdb.org/t/p/w500/'






const Moviedetails = ({movie}) => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);
  
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=c22de314a7b1bb1011a24ad66661a7a1`;
  
  useEffect(() => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
        })
        .catch((error) => {
          console.error('Error fetching movie details:', error);
        });
    }, [API_URL]);
    
    if (!movies) {
      return <div>Loading...</div>;
    }
    

  return (

    <>

      <div className="movieDetails">
        <div className="movieDetails_navbar">

          <div className='movieBox_box'>
            <div className="movieDetails_logo" >
                <img src={logo_img} alt="MovieBox_Logo" width="50px" height="50px"/>
                <h1 className="logo_title">MovieBox</h1>
            </div>

          </div>

          <div className='box'>
            <div className="movieDetails_home" >
                <img src={home_img} alt="home_icon" width="40px" height="40px"/>
                <h1 className="title">Home</h1>
            </div>

          </div>


          <div className='movie_box'>
            <div className="movieDetails_movies" >
                <img src={movie_proj} alt="movie_projector" width="40px" height="40px"/>
                <h1 className="title">Movies</h1>
            </div>
          </div>
          
          
          <div className='box'>
            <div className="movieDetails_series" >
                <img src={tv_show} alt="tv_icon" width="40px" height="40px"/>
                <h1 className="title">TV Series</h1>
            </div>

          </div>

          <div className='box'>
            <div className="movieDetails_upcoming" >
                <img src={calender} alt="calender_icon" width="40px" height="40px"/>
                <h1 className="title">Upcoming</h1>
            </div>

          </div>

          <div className='quiz_box'>
            <div className="movieDetails_quiz" >
                <h3>Play movie quizes and earn <br></br> free tickets</h3>
                <p>50k people are playing now</p>
                <div className='quiz_button'>Start Playing</div>
          </div>
          </div>

          <div className='logout_box'>
            <div className="movieDetails_logout" >
                <img src={logout} alt="logout_icon" width="40px" height="40px"/>
                <h1 className="title">Log out</h1>
            </div>

          </div>

        </div>

        <div className='movie_details'>
          <div className='watch_trailer'>
            <img className="movie_backdrop" src={API_IMG+movies.backdrop_path} alt="movie_backdrop"/>
            <div className='play_button'>
              <img src={play_icon} className='play_icon' alt='play_button'/>
              <p className='play_trailer'>Watch Trailer</p>
            </div>
          </div>

          <div className='d-flex justify-content-between'>
            <div className='d-flex justify-content-between align-items-baseline'>
                <h4 data-testid= "movie-title">{movies.title}</h4>●
                <h4 data-testid= "movie-release-date">{movies.release_date}</h4>●
                <h4>PG-13</h4>●
                <h4 data-testid= "movie-runtime">{movies.runtime} minutes</h4>
                <p className="genre">Action</p>
            </div>

            <div className='d-flex align-items-baseline'>
              <img src={star} alt="star_image" width="25px" height="25px"/>
              <p><span className='text-secondary'>8.5</span> | 350k</p>
            </div>
          </div>
          
          
          <div className='d-flex overview_div'>
            <div className=''>
              <p data-testid= "movie-overview">{movies.overview}</p>
              </div>
              <div className=''>
                <div className='showtime'><img src={tickets} alt="tickets" width="25px" height="25px"/> See Showtimes</div>
                <div className='more_option'><img src={list} alt="list" width="25px" height="25px"/> More Watch Options</div>
              </div>
          </div>
          <div className="horizontal-line"> </div>


          <div className='d-flex overview_div'>
            <div className=' '>
              <p className='m-3'>Director: <span className='credits'>Joseph Kosinsji</span></p>
              <div className="horizontal-line"> </div>
              <p className='m-3'>Writers: <span className='credits'>Jim Cash, Jack Epps Jr, Peter Craig</span></p>
              <div className="horizontal-line"> </div>
              <p className='m-3'>Stars: <span className='credits'>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
              <div className="horizontal-line"> </div>




              <div className='d-flex top_rated_award1'>
              
                <div className='top_rated_award'>

                  <div className='top_rated'>Top rated movie #65</div>

                </div>

                  <div className='award_nom'>
                  <div>Awards 9 nominations</div>
                  <img src={down_arrow} alt="down_arrow" width="25px" height="25px"/>
                  </div>

                </div>

            </div>


            <div className=''>
                <img src={best_movies} alt="bestMovies_image" width="300px" height="auto" className='mt-3'/>
              </div>
          </div>
        
        </div>

      </div>

    </>
  );
}

export default Moviedetails;