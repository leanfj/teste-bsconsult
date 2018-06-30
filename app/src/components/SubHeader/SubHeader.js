import React, { Component } from 'react';
import './SubHeader.css';

class SubHeader extends Component {
  render() {
    return (
      <div className="subheader">
        <h4 className="subheader__secao">
          Vestidos
        </h4>

        <select name="ordenacao" id="" className="subheader__select">
          <option value="" disabled>Ordernar por</option>
          <option value="1">Mais recentes</option>
          <option value="2">Menor Preço</option>
          <option value="3">Maior Preço</option>
        </select>

      </div>

    );
  }
}
export default SubHeader;
