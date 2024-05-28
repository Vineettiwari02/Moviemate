import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Movielist, MovieDetail, Search , Pagenotfound} from "../pages";



export const Allroutes = () => {
  return (
    < div className="dark:bg-slate-800">
    <Routes>
        <Route path="/" element={<Movielist apiPath="movie/now_playing" title="Home"/>}></Route>
        <Route path="/movie/:id" element={<MovieDetail/>}></Route>
        <Route path="/movies/popular" element={<Movielist apiPath="movie/popular" title="Popular"/>}></Route>
        <Route path="/movies/top" element={<Movielist apiPath="movie/top_rated" title="Top rated"/>}></Route>
        <Route path="/movies/upcoming" element={<Movielist apiPath="movie/upcoming" title="Upcoming"/>}></Route>
        <Route path="/search" element={<Search apiPath="search/movie" title="Search"/>}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
    </Routes>
    </div>
  )
}
