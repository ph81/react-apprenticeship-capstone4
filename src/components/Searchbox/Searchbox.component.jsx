import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import {
  Searchbar,
  SearchBtn,
  SearchForm,
  SearchInput,
} from './Searchbox.styles';

const Searchbox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  let history = useHistory();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== '') {
      history.push(`/search?q=${searchTerm}`);
    }
  };
  return (
    <Searchbar>
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchInput
          type="search"
          value={searchTerm}
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <SearchBtn type="submit">
          <FiSearch />
        </SearchBtn>
      </SearchForm>
    </Searchbar>
  );
};

export default Searchbox;
