import './style.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      
      <h1>FATEC franca</h1>

      <div className='menu'>

      <Link to="/Sobre">Sobre</Link>
      <Link to="/">Home</Link>
      <Link to="/informacoes/Contato">Contato</Link>

      </div>

    </header>
    
  )
}

export default Header;
