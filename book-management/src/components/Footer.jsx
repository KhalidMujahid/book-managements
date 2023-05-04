import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ marginTop: "4rem" }}>
      <Link className="footer" style={{ textDecoration: "none", color: "white",width: "100%" }} to="/add">
        <button>
          Add book <FaPlus />
        </button>
      </Link>
    </div>
  );
}

export default Footer;
