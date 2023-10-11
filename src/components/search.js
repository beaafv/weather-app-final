const SearchForm = ({ query, setQuery, handleSearch }) => (
<form onSubmit={handleSearch}>
  <input style={{width: '50vw', borderRadius:'4px', height:'5vh', borderColor:'blue', display:'flex', flexDirection:'column', margin:'auto'}}
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search for a city "
  />
  <button className="btn btn-light mt-2" style={{width:'200px', backgroundColor:'black', color:'white'}}type="submit">Search</button>

  </form>
);
export default SearchForm;
