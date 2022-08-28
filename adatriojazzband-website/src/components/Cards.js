
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import foto3 from './img/foto3.jpeg';
import foto4 from './img/foto4.png';
import foto5 from './img/foto5.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Nuestros conciertos...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src={foto3}
            text='El Refugio - Cala Higuera (SanJosé, Almería)'
            label='Concierto'
            label2= '25/08/22'
            path='/eventos'
            />
            <CardItem
              src={foto4}
              text='BistroBar (Fines, Almería)'
              label='Concierto'
              label2= '22/07/22'
              path='/eventos'
            />
            <CardItem
              src={foto5}
              text='Plaza del Ayuntamiento (Fines, Almería)'
              label='Concierto'
              label2='19/06/22'
              path='/eventos'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;