import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../services/api/apiCall";

function AddBook() {
  const [error, setError] = useState(false);
  const [input, setInput] = useState({
    title: "",
    price: 0,
    image: "book.jpg"
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = async e => {
    e.preventDefault();
    setError(false);

    if (!input.title || !input.price || !input.image) {
      setError(true);
      return;
    }

    await fetch(`${baseURL}add`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input),
      method: "POST"
    })
      .then(res => res.json())
      .then(() => navigate("/", { replace: true }))
      .catch(error => console.log(error));
  };

  return (
    <div className="form">
      <h4>Add book</h4>
      <div className="input">
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={input.title}
          required
        />
      </div>
      <div className="input">
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="Price"
          value={input.price}
          required
        />
      </div>
      <div className="input">
        <input
          name="image"
          onChange={handleChange}
          type="text"
          placeholder="Image"
          value={input.image}
          readOnly
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
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}

export default AddBook;
