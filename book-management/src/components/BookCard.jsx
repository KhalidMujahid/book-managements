import { Link } from "react-router-dom";
import { baseURL } from "../services/api/apiCall";
import { FaTrash, FaEdit } from "react-icons/fa";

function BookCard({ id, title, price, image }) {
  async function handleDelete(id) {
    await fetch(`${baseURL}${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .catch(() => window.location.reload());
  }

  return (
    <div className="card">
      <img src={`${baseURL}assets/${image}`} alt="" />
      <p>
        <span>title</span>: {title}
      </p>
      <p>
        <span>price</span>: ${price}
      </p>
      <div className="buttons">
        <Link to={`/edit/${id}`}>
          <button>
            Edit <FaEdit />
          </button>
        </Link>
        <button onClick={() => handleDelete(id)}>
          Delete <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default BookCard;
