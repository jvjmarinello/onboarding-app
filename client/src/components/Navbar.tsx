import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/data">Data</Link>
      <Link to="/admin">Administration</Link>
    </div>
  )
};