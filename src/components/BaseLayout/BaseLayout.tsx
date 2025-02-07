import { Link, Outlet } from "react-router-dom";
import "./BaseLayout.css";

const BaseLayout = () => {
  return (
    <div>
      <header className="header">
        <p>Learn Any Words</p>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
