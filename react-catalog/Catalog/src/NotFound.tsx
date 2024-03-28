import { Link } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {
  return (
    <div className="row">
      <Link to="/">
        <h1>Uh oh the page you were looking for doesn't exist! Sad times...</h1>
      </Link>
    </div>
  );
}
