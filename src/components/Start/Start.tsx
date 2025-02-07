import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <div>
      <button>
        <Link to="/quiz">quiz</Link>
      </button>
      <button>
        <Link to="/learned-words">learned words</Link>
      </button>
    </div>
  );
};
