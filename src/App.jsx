import React from 'react';
import './App.css';
// Импортируем КЛАССОВЫЙ компонент
import ShopItemClass from './components/ShopItemClass';
// Импортируем картинки точно так же
import itemBlue from './img/item-blue.jpg'; 
import itemBlack from './img/item-black.jpg';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: '£'
  };

  const windowStyle = {
    backgroundImage: `url(${itemBlue})`
  };

  const overlayStyle = {
    backgroundImage: `url(${itemBlack})`
  };

  return (
    <div className="container">
      <div className="background-element"></div>
      
      <div className="highlight-window" style={windowStyle}>
        <div className='highlight-overlay' style={overlayStyle}></div>
      </div>
      
      <div className="window">
        {/* Здесь используем ShopItemClass */}
        <ShopItemClass item={item} />
      </div>
    </div>
  );
}

export default App;