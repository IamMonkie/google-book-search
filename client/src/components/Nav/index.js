import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <h4>Google Books</h4>
      </a>
      <a className="nav-item nav-link" href="/books">
        Search
      </a>
      <a class="nav-item nav-link" href="/Detail">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
