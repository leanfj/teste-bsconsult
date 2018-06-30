import React, {Component} from 'react';
import './VitrineItem.css';
import fotoProduto from '../../img/produto1.jpg';

class VitrineItem extends Component {
  render() {
    return (
      <div className="vitrineitem">
        <img src={fotoProduto} alt="Foto produto" className="vitrineitem__image"/>
        <h4 className="vitrineitem__nome">Saia Bordada</h4>
        <div className="vitrineitem__bottom">
          <div className="vitrineitem__preco">
            R$368 <span> até 5x de R$30,00</span>
          </div>
          <i className="fas fa-shopping-cart vitrineitem__carrinho"></i>
        </div>
      </div>

    );
  }
}

export default VitrineItem;