import { Link, Outlet } from "react-router-dom";
import "./BaseLayout.scss";

const BaseLayout = () => {
  return (
    <div className="BaseLayout">
      <header className="BaseLayout__Header">
        <div className="BaseLayout__Header__Home">
          <Link to="/">Learn Any Words</Link>
        </div>
      </header>
      <main className="BaseLayout__Content">
        <Outlet />
      </main>
      <footer className="BaseLayout__Footer">
        © 2025 Learn Any Words. All rights reserved.
      </footer>
    </div>
  );
};

export default BaseLayout;
