import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <div style={{display: 'flex', gap: '20px'}}>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/data">Data</Link>
      <Link to="/admin">Administration</Link>
      <Button>Sign Up</Button>
    </div>
  )
};