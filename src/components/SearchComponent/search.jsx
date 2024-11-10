import { Form, InputGroup } from "react-bootstrap";

const Search = ({ onSearch }) => {
  const handleInputChange = (e) => onSearch(e.target.value);

  return (
    <InputGroup className="mb-3">
      
      <Form.Control
      
        placeholder="Search  about our products..."
        onChange={handleInputChange}
      />
    </InputGroup>
  );
};

export default Search;