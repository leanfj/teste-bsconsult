import React, { Component } from 'react';
import './ColorFilter.css';

import Apis from '../../api/Api'


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
      itensChecked: {},
      colors: []
    }
  }

  componentDidMount () {
    Apis.listData().then(
      response => {
        this.setState({
          colors: response.data,
        });
        let colors = [];
        response.data.forEach((element,index) => {
          colors.push(element.cor);
        });
        let unique = colors.filter((value, index, self) =>{
          return self.indexOf(value) === index;
        });
        this.setState({colors: unique});
      }
    );

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

  loadMoreColors = (e) => {
    e.preventDefault();
    console.log('click');
  }

  render() {

    return (
      <div className="colorfilter">
        <h4 className="colorfilter__titulo">cores</h4>
        <label htmlFor="amarelo" className={"colorfilter__input " + (this.state.amarelo ? "colorfilter__input--selected" : "")}>
          <input type="checkbox" name="amarelo" id="amarelo" onChange={this.isChecked} />
          Amarelo
        </label>
        <label htmlFor="azul" className={"colorfilter__input " + (this.state.azul ? "colorfilter__input--selected" : "")}>
          <input type="checkbox" name="azul" id="azul" onChange={this.isChecked} />
          Azul
        </label>
        <label htmlFor="verde" className={"colorfilter__input " + (this.state.verde ? "colorfilter__input--selected" : "")}>
          <input type="checkbox" name="verde" id="verde" onChange={this.isChecked} />
          Verde
        </label>
        <label htmlFor="branco" className={"colorfilter__input " + (this.state.branco ? "colorfilter__input--selected" : "")}>
          <input type="checkbox" name="branco" id="branco" onChange={this.isChecked} />
          Branco
        </label>
        <button className="colorfilter__vermais" onClick={(e) =>this.loadMoreColors(e)}>Ver todas as core
          <i className="fas fa-angle-down" /> </button>
      </div>
    );
  }
}

export default ColorFilter;