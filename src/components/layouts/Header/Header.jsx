import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <nav className="header-container">
      <ul>
        <NavLink to="/infinitScroll">
          <li>Infinite-Scrolling</li>
        </NavLink>

        <NavLink to="/pagination">
          <li>Pagination</li>
        </NavLink>

        <NavLink to="/todo">
          <li>ToDo</li>
        </NavLink>

        <NavLink to="/pokemon">
          <li>Pokemon</li>
        </NavLink>
      </ul>
    </nav>
  );
};
