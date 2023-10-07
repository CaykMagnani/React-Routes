import './style.css';
import { Link } from "react-router-dom";

function Card({title, price, image}) {
  return (
    <div className='cardInteira'>

      <div className='image'>
        <img className='img' src={image} alt='imagemProduto'/>
      </div>

      <div className='menu'>
        <h1>{title}</h1>
        <h2>{price}</h2>
      </div>

      </div>
    
  )
}

export default Card;