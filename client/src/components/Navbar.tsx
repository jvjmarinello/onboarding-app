import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex gap-8 items-center justify-center p-4">
      <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">Home</Link>
      <Link to="/data" className="text-gray-700 hover:text-blue-500 font-medium">Data</Link>
      <Link to="/admin" className="text-gray-700 hover:text-blue-500 font-medium">Administration</Link>
    </div>
  );
}
