import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC = () => {
  return (
    <form action="">
      <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
        <div className="input-group">
          <input
            type="search"
            placeholder="What're you searching for?"
            aria-describedby="button-addon1"
            className="form-control border-0 bg-light"
          ></input>
          <div className="input-group-append">
            <button id="button-addon1" type="submit" className="btn btn-link text-primary">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SearchBar;
