import {useEffect, useState} from "react";
import MovieCard from "./components/MovieCard";
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=9a93a967';

// function App(){
// const [movies,setmovies]=useState([]);
//  const [searchedname,setSearchedName]=useState("");

//  async function searchMovies(title){
//    const response=await fetch(`${API_URL}&s=${title}`);
//    const data=response.json();
//    console.log(data);
//    data.then((res)=>{
//     console.log(res.search);
//     setmovies(res.search);
//    });
//  }
//  console.log(movies);
//  useEffect(()=>{searchMovies("spiderman")},[]);

//   return (<div>
//   <div>
//     <h1>English movies</h1>
//     <input onChange={(e)=>setSearchedName(e.target.value)} name="moviename" value={searchedname} placeholder="type movie name here.."/>
//     <img onClick={(E)=>{searchMovies(searchedname)}} src={SearchIcon} alt="searchicon"/>
//   </div>

//   {
//     movies?.length>0 ?
//     (
//       <div>
//         {movies.map((movie,index)=>{<MovieCard movie={movie} key={index}/> })}
//       </div>
//     ):
//     (<div>
//       <h1>no movies</h1>
//     </div>)
//   }

//   </div>

//   )
// }
// export default App;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = response.json();
        console.log(data)
        data.then((res) => {
            console.log(res.Search)
            setMovies(res.Search);
        });
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, []);

    return (
        <div className='app'>
            <h1>English Movies</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='SearchIcon'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0 ?
                    (
                        <div className='container'>
                            {
                                movies.map((movie,index) => (<MovieCard movie={movie} key={index}/>))
                            }
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }

        </div>
    );
}

export default App;
