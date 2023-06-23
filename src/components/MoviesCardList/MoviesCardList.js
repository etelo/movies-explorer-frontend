import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

import Poster1 from "../../images/1_pic.png";
import Poster2 from "../../images/2_pic.png";
import Poster3 from "../../images/3_pic.png";
import Poster4 from "../../images/4_pic.png";
import Poster5 from "../../images/5_pic.png";
import Poster6 from "../../images/6_pic.png";
import Poster7 from "../../images/7_pic.png";
import Poster8 from "../../images/8_pic.png";
import Poster9 from "../../images/9_pic.png";
import Poster10 from "../../images/10_pic.png";
import Poster11 from "../../images/11_pic.png";
import Poster12 from "../../images/12_pic.png";

function MoviesCardList({ isSaved }) {
  const posters = [
    { id: 1, poster: Poster1, favorite: false },
    { id: 2, poster: Poster2, favorite: false },
    { id: 3, poster: Poster3, favorite: true },
    { id: 4, poster: Poster4, favorite: false },
    { id: 5, poster: Poster5, favorite: true },
    { id: 6, poster: Poster6, favorite: false },
    { id: 7, poster: Poster7, favorite: false },
    { id: 8, poster: Poster8, favorite: false },
    { id: 9, poster: Poster9, favorite: false },
    { id: 10, poster: Poster10, favorite: true },
    { id: 11, poster: Poster11, favorite: false },
    { id: 12, poster: Poster12, favorite: false },
  ];

  return (
    <div className="cards">
      <ul className="cards__list">
        {posters.map((movie) => (
          <MoviesCard poster={movie.poster} favorite={movie.favorite} isSaved={isSaved} />
        ))}
      </ul>
      <button className="cards__still" type="button">
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
