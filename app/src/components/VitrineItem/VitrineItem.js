import React, {Component} from 'react';
import './VitrineItem.css';

class VitrineItem extends Component {
  render() {
    return (
      <div className="vitrineitem showItem">
        <img src={this.props.Imagem} alt="Foto produto" className="vitrineitem__image"/>
        <h4 className="vitrineitem__nome">{this.props.Nome}</h4>
        <div className="vitrineitem__bottom">
          {this.props.Desconto ? <div className="vitrineitem__preco">R$ {this.props.Preco - (this.props.Desconto * this.props.Preco) / 100}</div> : "" }
          <div className={this.props.Desconto ? "vitrineitem__preco vitrineitem__preco--desconto " : "vitrineitem__preco"}>
            R$ {(this.props.Preco).toFixed(2)} 
          </div>
          <span className="vitrineitem__parcelas"> até 5x de R$ {this.props.Desconto ? ((this.props.Preco - (this.props.Desconto * this.props.Preco) / 100 ) / 5).toFixed(2) : (this.props.Preco / 5).toFixed(2) }</span>
          <i className="fas fa-shopping-cart vitrineitem__carrinho" onClick={this.props.AddCart}></i>
        </div>
      </div>

    );
  }
}

export default VitrineItem;