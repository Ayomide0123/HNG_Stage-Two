import React from "react";
import { useEffect, useState } from "react";
import logo_img from '../assets/img/tv.png';
import search_icon from '../assets/icon/search_icon.svg';
import play_icon from '../assets/icon/play_icon.svg';
import menu_icon from '../assets/icon/menu_icon.svg';
import right_arrow from '../assets/icon/right_arrow.svg';
import imdb_logo from '../assets/img/imdb_logo.png';
import facebook from '../assets/img/facebook.svg';
import instagram from '../assets/img/instagram.svg';
import twitter from '../assets/img/twitter.svg';
import youtube from '../assets/img/youtube.svg';
import tomatoes_img from '../assets/img/tomatoes.png';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieBox from "./MovieBox";
import { Form, FormControl } from 'react-bootstrap';



const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c22de314a7b1bb1011a24ad66661a7a1';


function Homepage() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery]=useState('');
  
    useEffect(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          const top10Movies = data.results.slice(0, 10);
          console.log(top10Movies);
          setMovies(top10Movies);
        });
    }, []);


  const searchMovie = async(e)=>{
      e.preventDefault();
      console.log("Searching");
      try{
        const url=`https://api.themoviedb.org/3/search/movie?api_key=c22de314a7b1bb1011a24ad66661a7a1&query=${query}`;
        const res= await fetch(url);
        const data= await res.json();
        console.log(data);
        setMovies(data.results);
      }
      catch(e){
        console.log(e);
      }
    }

    const changeHandler=(e)=>{
      setQuery(e.target.value);
    };

  return (
    <>
      <header className="header">

        <div className="navbar">

          <div className="logo" >
            <img src={logo_img} alt="MovieBox_Logo" width="50px" height="50px"/>
            <h1 className="logo_title">MovieBox</h1>
          </div>

          <div className="search_bar">

          <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="What do you want to watch?"
              className="me-2  search_func"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <img src={search_icon} alt="searchIcon" className="search_icon"/>
            </Form>

          </div>

          <div className="menu">
            <h3>Sign in</h3>
            <img src={menu_icon} alt="menuIcon"/>
          </div>

        </div>



        <div className="john_details">

          <h1>John Wick 3 : Parabellum</h1>

          <div className="ratings">
            <div className="imdb">
            <img src={imdb_logo} alt="imdb_Logo" width="25px" height="17px"/>
            <p>86.0 / 100</p>
            </div>
            <div className="tomatoes">
            <img src={tomatoes_img} alt="rottenTomatoes_Logo" width="16px" height="17px"/>
            <p>97%</p>
            </div>
          </div>

          <p className="overview">John Wick is on the run after killing a member of the international assassins&#39; guild, and with a $14
              million price tag on his head, he is the target of hit men and women everywhere.</p>
          

          <button className="trailer_button">
             <img src={play_icon} alt="play_icon" width="20px" height="20px"/>
             <h4>WATCH TRAILER</h4>
          </button>

        </div>


          <div className="page_nav">
            <div className="page_numbers">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
            <div className="rectangle" />
        </div>
      </header>


      <main className="topTenMovies">
        <div className="featured">
          <h1>Featured Movies</h1>
          <a href="https://www.google.com/">See more <img src={right_arrow} alt="arrow"/></a>
        </div>

        <div className="container">
          <div className="grid">
            {movies.map((movieReq)=><MovieBox key={movieReq.id} {...movieReq}/>)}
          </div>
        </div>
      </main>

      <footer>

        <div className="footer">


          <div className="d-flex footer_items">
            <div> <img src={facebook} alt="facebook" width="30px" height="30px"/></div>
            <div> <img src={instagram} alt="instagram" width="30px" height="30px"/></div>
            <div> <img src={twitter} alt="twitter" width="30px" height="30px"/></div>
            <div> <img src={youtube} alt="youtube" width="30px" height="30px"/></div>
          </div>

          <div className="d-flex footer_items">
            <p>Conditions of Use</p>
            <p>Privacy &amp; Policy</p>
            <p>Press Room</p>
          </div>

          <div>
            <p className="text-black-50">&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
