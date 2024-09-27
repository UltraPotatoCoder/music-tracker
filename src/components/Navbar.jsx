import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>All Songs</Link>
        </li>
        <li>
          <Link>All Albums</Link>
        </li>
        <li>
          <Link>Add Music</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
