import style from './style.module.css';
import search from "../../assets/search.png";

const Search = () => {
  return (
    <div className={style.search}>
      <div className={style.content}>
        <h1>Search Our Directory</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. ut , aliqua, ut enim ad minim veniaenim ad
          minim veniam. Sed do eiusmod tempor incididunt ut
          labore
        </p>
        <div className={style.searchInput}>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className={style.image}>
        <img src={search} alt="Group of professionals" />
      </div>
    </div>
  );
};

export default Search;