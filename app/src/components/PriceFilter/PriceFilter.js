import React, {Component} from 'react';
import './PriceFilter.css';

class PriceFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cinquenta: false,
      centoecinquenta: false,
      trezentos: false,
      quinhentos: false,
      quinhentoseum: false,
      itensCheckedMin: {},
      itensCheckedMax: {}
    }
  }

  isChecked = (e) => {
    let itensCheckedMin = this.state.itensCheckedMin;
    itensCheckedMin[e.target.min] = e.target.min;
    let itensCheckedMax = this.state.itensCheckedMax;
    itensCheckedMax[e.target.max] = e.target.max;
    this.setState({
      [e.target.name]: e.target.checked,
      itensCheckedMin,
      itensCheckedMax
    });
    if (!e.target.checked) {
      delete itensCheckedMin[e.target.min];
      delete itensCheckedMax[e.target.max];
    } 

    this.props.onSelectPrice(itensCheckedMin, itensCheckedMax);
  }

  render(){
    return (
      <div className="pricefilter"> 
        <h4 className="pricefilter__titulo">faixa de preço</h4>
        <form action="">
          <label htmlFor="cinquenta" className={"pricefilter__input " + (this.state.cinquenta ? "pricefilter__input--selected" : "")}>
            <input type="checkbox" name="cinquenta" id="cinquenta" min="0" max="50" onChange={this.isChecked}/> 
            de R$ 0 até R$ 50
          </label>
          <label htmlFor="centoecinquenta" className={"pricefilter__input " + (this.state.centoecinquenta ? "pricefilter__input--selected" : "")}>
            <input type="checkbox" name="centoecinquenta" id="centoecinquenta" min="51" max="150" onChange={this.isChecked}/> 
            de R$ 51 até R$ 150
          </label>
          <label htmlFor="trezentos" className={"pricefilter__input " + (this.state.trezentos ? "pricefilter__input--selected" : "")}>
            <input type="checkbox" name="trezentos" id="trezentos" min="151" max="300" onChange={this.isChecked}/> 
            de R$ 151 até R$ 300
          </label>
          <label htmlFor="quinhentos" className={"pricefilter__input " + (this.state.quinhentos ? "pricefilter__input--selected" : "")}>
            <input type="checkbox" name="quinhentos" id="quinhentos" min="301" max="500" onChange={this.isChecked}/> 
            de R$ 301 até R$ 500
          </label>
          <label htmlFor="quinhentoseum" className={"pricefilter__input " + (this.state.quinhentoseum ? "pricefilter__input--selected" : "")}>
            <input type="checkbox" name="quinhentoseum" id="quinhentoseum" min="501" max="0" onChange={this.isChecked}/> 
            a partir de R$ 501
          </label>
        </form>
      </div>
    );
  }
}

export default PriceFilter;