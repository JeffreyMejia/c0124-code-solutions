import { Link } from 'react-router-dom';
import './About.css';

export function About() {
  return (
    <div className="row about-row">
      <Link to="/about">
        <h1 className="about">Nice place you got here</h1>
      </Link>
    </div>
  );
}
