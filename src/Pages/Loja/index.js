import './style.css';
import CardMap from "../../Components/Cards/CardMap"

function Loja() {

  const cardData = [
    { title: 'Nvidia-Geforce-RTX-4090', price: '15000 LulaCoins', image: 'https://img.terabyteshop.com.br/produto/g/placa-de-video-asus-rog-strix-geforce-rtx-4090-oc-edition-24gb-gddr6x-dlss-ray-tracing-rog-strix-rtx4090-o24g-gaming_150634.png' },
    { title: 'Cachimbo-De-Craque-Usado', price: '140 LulaCoins', image: 'https://media.istockphoto.com/id/104270976/pt/foto/metanfetamina-cano.jpg?s=612x612&w=0&k=20&c=G4iG-bgQqdkbXvmfQOtCfkLp16mwYfsIU9kG_qQw66s=' },
    { title: 'Atari', price: '10 LulaCoins', image: 'https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_g/12773/5773562.jpg' },
    { title: 'Super-Nintendo', price: '90 LulaCoins', image: 'https://www.skooterblog.com/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-23-at-15.21.12-768x432.jpg' },
  ];

  return (
    <div className='lojaPagina'>
      <CardMap cardData={cardData} />  
    </div>
  )
}

export default Loja;
