import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import api from './api/axiosConfig';
import Layout from './api/comp/Layout';
import { Route,Routes } from "react-router-dom";
import Home from './api/comp/home/Home' 
import Header from "./api/comp/header/Header";
import Trailer from "./api/comp/trailer/Trailer";
function App() {

  const[movies, setMovies] = useState();
  const getMovies = async()=>{
    try{
        const response  = await api.get("/api/movies");
        console.log(response.data);
        setMovies(response.data);
      }
    catch(err)
    {
      console.log(err);
    }
  }
  useEffect(()=>{
        getMovies();
  },[])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path  = "/" element = {<Layout/>}>
        <Route path  = "/" element = {<Home movies = {movies}/>}></Route>
        </Route>
        <Route path = "/Trailer/:ytTrailerId" element = {<Trailer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
