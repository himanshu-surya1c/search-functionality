import axios from "axios";
import React from "react";
import "../src/styles/styles.css";

const baseURL = "https://fakestoreapi.com/products";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="app">
      <input />
      {/* <button onClick=(test)> Search </button> */}
      <h1>List of Products : </h1>
      {post.map((list) => (
        <div className="box">
          <span key={list.id}> </span>
          <h5>{list.title}</h5>
          <p>{list.price}</p>
        </div>
      ))}
    </div>
  );
}
