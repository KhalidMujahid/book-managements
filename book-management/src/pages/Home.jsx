import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import { baseURL } from "../services/api/apiCall";
import { useEffect, useState } from "react";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(baseURL);
      const data = await response.json();
      setBooks(data);
    })();
  }, []);

  return (
    <div>
      <div className="row">
        {books.map(book => (
          <BookCard
            id={book.id}
            title={book.title}
            price={book.price}
            image={book.image}
            key={book.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
