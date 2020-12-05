import React from "react";
import "../styles/searchBar.css"

const SearchBar = (props) => {

  return (
    <form>
    <div className="form-group search-widget">
      <div className="input-group mb-3">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Directory Here"
          id="search"
        />
          <button onClick={props.handleFormSubmit} className="btn-primary"><i class="fas fa-sync-alt"></i></button>
      </div>
    </div>
  </form>
  );
}

export default SearchBar;