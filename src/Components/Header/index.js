import './style.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      
      <h1>FATEC Franca</h1>

      <div className='menu'>

      <Link className='linkSemSublinhado' to="/Sobre">Sobre</Link>
      <Link className='linkSemSublinhado' to="/">Home</Link>
      <Link className='linkSemSublinhado' to="/informacoes/Contato">Contato</Link>

      </div>

    </header>
    
  )
}

export default Header;
