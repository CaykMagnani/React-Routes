import { useParams } from "react-router-dom";

function Produto() {

    const { id }= useParams();

    if (id === 'RTX-4090'){
        return (
            <>
                <h1>Nvidia Geforce RTX 4090</h1>
                <p>15000 LulaCoins</p>
                <p>Roda Free Fire à 25 FPS</p>
                <img src="https://img.terabyteshop.com.br/produto/g/placa-de-video-asus-rog-strix-geforce-rtx-4090-oc-edition-24gb-gddr6x-dlss-ray-tracing-rog-strix-rtx4090-o24g-gaming_150634.png" alt="Foto1" />
            </>
        )
    }

    if (id === 'Cachimbo-craque-usado'){
        return (
            <>
                <h1>Cachimbo De Craque Usado</h1>
                <p>140 LulaCoins</p>
                <p>Queima pedra que é uma beleza</p>
                <img src="https://media.istockphoto.com/id/104270976/pt/foto/metanfetamina-cano.jpg?s=612x612&w=0&k=20&c=G4iG-bgQqdkbXvmfQOtCfkLp16mwYfsIU9kG_qQw66s=" alt="Foto2" />
            </>
        )
    }


}

export default Produto;
