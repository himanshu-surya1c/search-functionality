import axios from "axios";
import React from "react";
import "../src/styles/styles.css";

const baseURL = "https://fakestoreapi.com/products";

export default function App() {
  const [items, setItems] = React.useState(null);
  const [searchField, setSearchField] = React.useState("");
  const [searchShow, setSearchShow] = React.useState(false);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItems(response.data);
    });
  }, []);

  if (!items) return null;

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  return (
    <div className="app">
      <input placeholder="search" type="search" onChange={handleChange} />
      <h1>List of Products : </h1>
      {items.map((list) => (
        <div className="box">
          <span key={list.id}> </span>
          <h5>{list.title}</h5>
          <p>{list.price}</p>
        </div>
      ))}
    </div>
  );
}
