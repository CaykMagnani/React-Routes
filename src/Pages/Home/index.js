import CarrosselResponsivo from "../../Components/Carousel";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <>
      <Link className='linkSemSublinhado' to="/Loja">
      <CarrosselResponsivo />
      </Link>
      </>
    </div>
  )
}

export default Home;
