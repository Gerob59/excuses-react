import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};
export default NotFoundPage;
