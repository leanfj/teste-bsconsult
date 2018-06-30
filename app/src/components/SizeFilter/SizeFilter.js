import React, {Component} from 'react';
import './SizeFilter.css';

class SizeFilter extends Component {
  render () {
    return (
      <div className="sizefilter"> 
        <h4 className="sizefilter__titulo">tamanhos</h4>
        <form action="">
          <label htmlFor="pequeno" className="sizefilter__input ">
            <input type="checkbox" name="pequeno" id="pequeno" /> 
            P
          </label>
          <label htmlFor="medio" className="sizefilter__input sizefilter__input--selected">
            <input type="checkbox" name="medio" id="medio" /> 
            M
          </label>
          <label htmlFor="grande" className="sizefilter__input ">
            <input type="checkbox" name="grande" id="grande" /> 
            G
          </label>
          <label htmlFor="extragrande" className="sizefilter__input ">
            <input type="checkbox" name="extragrande" id="extragrande" /> 
            GG
          </label>
          <label htmlFor="unico" className="sizefilter__input ">
            <input type="checkbox" name="unico" id="unico" /> 
            U
          </label>
          <label htmlFor="trintaeseis" className="sizefilter__input ">
            <input type="checkbox" name="trintaeseis" id="trintaeseis" /> 
            36
          </label>
          <label htmlFor="trintaeoito" className="sizefilter__input ">
            <input type="checkbox" name="trintaeoito" id="trintaeoito" /> 
            38
          </label>
          <label htmlFor="quarenta" className="sizefilter__input ">
            <input type="checkbox" name="quarenta" id="quarenta" /> 
            40
          </label>
          <label htmlFor="quarentaedois" className="sizefilter__input ">
            <input type="checkbox" name="quarentaedois" id="quarentaedois" /> 
            42
          </label>
          <label htmlFor="quarentaequatro" className="sizefilter__input ">
            <input type="checkbox" name="quarentaequatro" id="quarentaequatro" /> 
            44
          </label>
          <label htmlFor="quarentaeseis" className="sizefilter__input ">
            <input type="checkbox" name="quarentaeseis" id="quarentaeseis" /> 
            46
          </label>
        </form>
      </div>
    );
  }
}

export default SizeFilter