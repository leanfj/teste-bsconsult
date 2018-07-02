import React, { Component } from 'react';
import './SubHeader.css';

class SubHeader extends Component {
  constructor (props){
    super(props)
    this.state = {
      isChecked: false
    }
  }
  isSelected = (e) => {
    let order = e.target.value;
    this.props.onSelecOrder(order);
    this.props.onSelect();
  }

  mobileFilterOpen = () => {
    this.props.onFilterClick();
  }

  render() {
    return (
      <div className="subheader">
        <h4 className="subheader__secao">
          Vestidos
        </h4>
        <div className="subheader__filters">
          <button className="button__filtros" onClick={this.mobileFilterOpen}>Filtros</button>
          <button className="button__ordem">Ordenar</button>
        </div>
        <select name="ordenacao" id="" className="subheader__select" onChange={this.isSelected}>
          <option value="" disabled>Ordernar por</option>
          <option value="">Mais recentes</option>
          <option value="asc">Menor Preço</option>
          <option value="desc">Maior Preço</option>
        </select>

      </div>

    );
  }
}
export default SubHeader;
