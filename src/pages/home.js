  import React,{useEffect,useState} from "react";
  import "./header.css";



    export default function Home(){

      const apiUrl ="https://api.themoviedb.org/3/discover/movie?api_key=38868210c902bc6cad8040a281134b8b";

      const [movies, setMovies] = useState([]);
     
    
      useEffect(() => {
          fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
             setMovies(data.results);
            
    
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
        },[movies])
        

return(
  <div className="container">
  <div>
    
  </div>
  </div>
  

)
  }