import React, { Component } from 'react';
import './ColorFilter.css';

class ColorFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amarelo: false,
      azul: false,
      branco: false,
      cinza: false,
      laranja: false,
      verde: false,
      itensChecked: {}
    }
  }

  isChecked = (e) => {
    let itensChecked = this.state.itensChecked;
    itensChecked[e.target.name] = e.target.name;
    this.setState({
      [e.target.name]: e.target.checked,
      itensChecked
    });
    if (!e.target.checked) {
      delete itensChecked[e.target.name];
    } 

    this.props.onSelectColor(itensChecked);
  }

  render() {
    return (
      <div className="colorfilter">
        <h4 className="colorfilter__titulo">cores</h4>
        <label htmlFor="amarelo" className={"colorfilter__input " + (this.state.amarelo ? "colorfilter__input--selected" : "")}>
          <input type="checkbox" name="amarelo" id="amarelo" ref="amarelo" checked={this.state.checkedAmarelo} onChange={(e) => this.isChecked(e)} />
          Amarelo
        </label>
        <label htmlFor="azul" className={"colorfilter__input " + (this.state.azul ? "colorfilter__input--selected" : "")}>
          <input type="checkbox" name="azul" id="azul" ref="azul" onChange={this.isChecked} />
          Azul
        </label>
        <label htmlFor="verde" className={"colorfilter__input " + (this.state.verde ? "colorfilter__input--selected" : "")}>
          <input type="checkbox" name="verde" id="verde" ref="verde" onChange={this.isChecked} />
          Verde
        </label>
        <label htmlFor="branco" className={"colorfilter__input " + (this.state.branco ? "colorfilter__input--selected" : "")}>
          <input type="checkbox" name="branco" id="branco" ref="branco" onChange={this.isChecked} />
          Branco
        </label>
        <label htmlFor="cinza" className={"colorfilter__input " + (this.state.cinza ? "colorfilter__input--selected" : "")}>
          <input type="checkbox" name="cinza" id="cinza" ref="cinza" onChange={this.isChecked} />
          Cinza
        </label>
        <label htmlFor="laranja" className={"colorfilter__input " + (this.state.laranja ? "colorfilter__input--selected" : "")}>
          <input type="checkbox" name="laranja" id="laranja" ref="laranja" onChange={this.isChecked} />
          Laranja
        </label>
        <button className="colorfilter__vermais">Ver todas as core
          <i className="fas fa-angle-down" /> </button>
      </div>
    );
  }
}

export default ColorFilter;