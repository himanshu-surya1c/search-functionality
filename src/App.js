import axios from "axios";
import React from "react";
import "../src/styles/styles.css";

const baseURL = "https://fakestoreapi.com/products";

export default function App() {
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItems(response.data);
    });
  }, []);
  // const onSearchChange =(event) => {
  //   const searchFieldString = event.target.value.toLocaleLowerCase();
  //   setSearch(searchFieldString);
  // };

  if (!items) return null;
  return (
    <div className="app">
      <input onChange={(event) => {}} type="search" />
      {console.log(event)}
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
