import { Link } from "react-router-dom";

const Start = () => {
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

export default Start;
