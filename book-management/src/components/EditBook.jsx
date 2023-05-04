import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../services/api/apiCall";

function EdditBook() {
  const [error, setError] = useState(false);
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState({
    title: "",
    price: 0,
    image: ""
  });

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      await fetch(`${baseURL}${id}`)
        .then(res => res.json())
        .then(val => setBook(val))
        .catch(error => console.log(error));
        setLoading(false);
    };
    getBook();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  //  update handler
  const handleClick = async e => {
    e.preventDefault();
    setError(false);

    if (
      !input.title ||
      !input.price ||
      !input.image ||
      !parseInt(input.price)
    ) {
      setError(true);
      return;
    }

    await fetch(`${baseURL}${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input),
      method: "PUT"
    })
      .then(res => res.json())
      .catch(() => navigate("/", { replace: true }));
  };

  return (
    <div className="form">
      <div>
        <h4>Edit book</h4>
        <img
          className="image"
          src={book.image ? `${baseURL}assets/${book.image}` : null}
          alt=""
        />
      </div>
      <div className="input">
        <input
          value={input.title}
          onChange={handleChange}
          type="text"
          placeholder={book.title}
          required
          name="title"
        />
      </div>
      <div className="input">
        <input
          onChange={handleChange}
          required
          type="number"
          placeholder={book.price}
          name="price"
        />
      </div>
      <div className="input">
        <input
          onChange={handleChange}
          value={input.image}
          required
          type="text"
          placeholder={book.image}
          name="image"
        />
      </div>
      <div>
        {error ? (
          <p
            style={{
              color: "red",
              marginTop: "10px",
              textTransform: "uppercase"
            }}
          >
            Inputs are required!
          </p>
        ) : null}
      </div>
      <div className="input">
        <button onClick={handleClick}>Edit</button>
      </div>
    </div>
  );
}

export default EdditBook;
