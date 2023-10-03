import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>Caguei na Home</p>

      <Link to="/Sobre">Sobre</Link>
    </div>
  );
}

export default Home;
