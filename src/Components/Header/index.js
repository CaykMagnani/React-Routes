import './style.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>

      <div className='logo'>
        <img src='https://cdn-icons-png.flaticon.com/512/5087/5087847.png' alt='logoEcommerce'/>
      </div>

      <div className='menu'>

      <Link className='linkSemSublinhado' to="/Sobre">Sobre</Link>
      <Link className='linkSemSublinhado' to="/">Home</Link>
      <Link className='linkSemSublinhado' to="/informacoes/Contato">Contato</Link>
      <Link className='linkSemSublinhado' to="/Loja">Loja</Link>

      </div>

    </header>
    
  )
}

export default Header;