import { Link } from "react-router-dom";

function Error() {
  return (
    <>
    <h1>Erro, pagina não encontrada</h1> <br />
    <h1>Voltar Para Home: </h1> <br />
    <Link to="/">Home</Link>
    </>    
  )
}

export default Error;
