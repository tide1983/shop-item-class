import React, { Component } from 'react';

// Наследуем класс от Component (из React)
class ShopItemClass extends Component {
  
  // Обязательный метод render, который возвращает разметку
  render() {
    // В классовом компоненте пропсы доступны через this.props
    const { brand, title, description, descriptionFull, price, currency } = this.props.item;

    return (
      <div className="main-content">
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className="description">
          {descriptionFull}
        </div>
        
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        
        <div className="divider"></div>
        
        <div className="purchase-info">
          {/* Форматируем цену так же, как в первом задании */}
          <div className="price">{currency}{price.toFixed(2)}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

export default ShopItemClass;