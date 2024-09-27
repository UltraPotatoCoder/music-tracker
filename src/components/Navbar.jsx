import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/songs">All Songs</Link>
        </li>
        <li>
          <Link to="/albums">All Albums</Link>
        </li>
        <li>
          <Link to="/submit">Add Music</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
