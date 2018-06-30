import React, {Component} from 'react';
import './PriceFilter.css';

class PriceFilter extends Component {
  render(){
    return (
      <div className="pricefilter"> 
        <h4 className="pricefilter__titulo">faixa de preço</h4>
        <form action="">
          <label htmlFor="cinquenta" className="pricefilter__input pricefilter__input--selected">
            <input type="checkbox" name="cinquenta" id="cinquenta" /> 
            de R$ 0 até R$ 50
          </label>
          <label htmlFor="centoecinquenta" className="pricefilter__input ">
            <input type="checkbox" name="centoecinquenta" id="centoecinquenta" /> 
            de R$ 51 até R$ 150
          </label>
          <label htmlFor="trezentos" className="pricefilter__input ">
            <input type="checkbox" name="trezentos" id="trezentos" /> 
            de R$ 151 até R$ 300
          </label>
          <label htmlFor="quinhentos" className="pricefilter__input ">
            <input type="checkbox" name="quinhentos" id="quinhentos" /> 
            de R$ 301 até R$ 500
          </label>
          <label htmlFor="quinhentoseum" className="pricefilter__input ">
            <input type="checkbox" name="quinhentoseum" id="quinhentoseum" /> 
            a partir de R$ 501
          </label>
        </form>
      </div>
    );
  }
}

export default PriceFilter;