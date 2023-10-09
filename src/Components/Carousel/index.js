import React from 'react';
import './style.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarrosselResponsivo = () => {
  return (

    <Carousel className='carrossel'>
      <div className='imagemCarrosel'>
        <img src="https://img.freepik.com/psd-gratuitas/banner-de-midia-social-semana-do-consumidor-com-20-de-desconto_621600-2.jpg?w=1380&t=st=1696891608~exp=1696892208~hmac=c4589aa835ca59e78a2080e1b860d87389b7dce7297b2c029fa6583520f634cb" alt="Imagem 1" />
      </div>
      <div className='imagemCarrosel'>
        <img src="https://img.freepik.com/fotos-gratis/variedade-de-elementos-da-black-friday_23-2149074076.jpg?w=1380&t=st=1696891649~exp=1696892249~hmac=d50e8246ed205a0d18ba1d472fcf2cbaaac10798eb7d3f785edd08a795ee54ab" alt="Imagem 2" />
      </div>
      <div className='imagemCarrosel'>
        <img src="https://img.freepik.com/fotos-gratis/oficina-de-compras-compra-venda-teade_53876-134043.jpg?w=1060&t=st=1696891684~exp=1696892284~hmac=c5e62bf9c4aaca73ef3526392bf9e26acb819cfdf5cc216ed1763e510b59b95b" alt="Imagem 3" />
      </div>
    </Carousel>

  );
};

export default CarrosselResponsivo;
