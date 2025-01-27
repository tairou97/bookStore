import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [bookInfo, setBookInfo] = useState([]);
  // Fetch book information from server
  useEffect(() => {
    const bookInfoFetch = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/bookInfo");
        const result = await res.json();
        setBookInfo(result);
      } catch (error) {
        console.log(error);
      }
    };
    bookInfoFetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Book Info App</h1> */}
        <ul>
          {bookInfo.map((book) => (
            <li key={book._id}>
              <div> </div>
              <img className="img" src={book.image} alt={book.title} />{" "}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
