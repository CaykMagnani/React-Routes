import { useParams } from "react-router-dom";
import './style.css';

function Produto() {

    const { id } = useParams();

    if (id === 'Nvidia-Geforce-RTX-4090') {
        return (
            <div className="paginaProduto">
                <img src="https://img.terabyteshop.com.br/produto/g/placa-de-video-asus-rog-strix-geforce-rtx-4090-oc-edition-24gb-gddr6x-dlss-ray-tracing-rog-strix-rtx4090-o24g-gaming_150634.png" alt="Foto1" />
                
                <div className="titulo">
                <h1>Nvidia Geforce RTX 4090</h1>
                </div>

                <div className="preco">
                <p>15000 LulaCoins</p>
                </div>

                <div className="descricao">
                <p>Roda Free Fire à 25 FPS</p>
                </div>

            </div>
        )
    }

    if (id === 'Cachimbo-De-Craque-Usado') {
        return (
            <div className="paginaProduto">
                <img src="https://media.istockphoto.com/id/104270976/pt/foto/metanfetamina-cano.jpg?s=612x612&w=0&k=20&c=G4iG-bgQqdkbXvmfQOtCfkLp16mwYfsIU9kG_qQw66s=" alt="Foto1" />
                
                <div className="titulo">
                <h1>Cachimbo De Craque Usado</h1>
                </div>

                <div className="preco">
                <p>170 LulaCoins</p>
                </div>

                <div className="descricao">
                <p>Bora Bill</p>
                </div>

            </div>
        )
    }

    if (id === 'Atari') {
        return (
            <div className="paginaProduto">
                <img src="https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_g/12773/5773562.jpg" alt="Foto1" />
                
                <div className="titulo">
                <h1>Atari</h1>
                </div>

                <div className="preco">
                <p>1800 LulaCoins</p>
                </div>

                <div className="descricao">
                <p>Atarizinho</p>
                </div>

            </div>
        )
    }

    if (id === 'Super-Nintendo') {
        return (
            <div className="paginaProduto">
                <img src="https://www.skooterblog.com/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-23-at-15.21.12-768x432.jpg" alt="Foto1" />
                
                <div className="titulo">
                <h1>Super Nintendo</h1>
                </div>

                <div className="preco">
                <p>1000 LulaCoins</p>
                </div>

                <div className="descricao">
                <p>Bora Jogar Um Zeldinha</p>
                </div>

            </div>
        )
    }


}

export default Produto;
