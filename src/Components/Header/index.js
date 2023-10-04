import './style.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      
      <h1>FATEC franca</h1>

      <div className='menu'>
      <Link to="/Sobre">Sobre</Link>
      <Link to="/">Home</Link>
      </div>

    </header>
    
  )
}

export default Header;
