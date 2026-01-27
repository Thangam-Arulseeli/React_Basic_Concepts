const SearchBox = ({ value, onChange }) => (
  <input
    placeholder="Search biodata..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchBox;

