import React, {Component} from 'react';
import './ColorFilter.css';

class ColorFilter extends Component {
  render(){
    return (
      <div className="colorfilter"> 
        <h4 className="colorfilter__titulo">cores</h4>
        <form action="">
          <label htmlFor="amarelo" className="colorfilter__input colorfilter__input--selected">
            <input type="checkbox" name="amarelo" id="amarelo" /> 
            Amarelo
          </label>
          <label htmlFor="azul" className="colorfilter__input ">
            <input type="checkbox" name="azul" id="azul" /> 
            Azul
          </label>
          <label htmlFor="branco" className="colorfilter__input ">
            <input type="checkbox" name="branco" id="branco" /> 
            Branco
          </label>
          <label htmlFor="cinza" className="colorfilter__input ">
            <input type="checkbox" name="cinza" id="cinza" /> 
            Cinza
          </label>
          <label htmlFor="laranja" className="colorfilter__input ">
            <input type="checkbox" name="laranja" id="laranja" /> 
            Laranja
          </label>
          <button className="colorfilter__vermais">Ver todas as core
          <i className="fas fa-angle-down"/> </button>
        </form>
      </div>
    );
  }
}

export default ColorFilter;