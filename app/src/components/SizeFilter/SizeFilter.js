import React, {Component} from 'react';
import './SizeFilter.css';



class SizeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pequeno: false,
      medio: false,
      grande: false,
      extragrande: false,
      unico: false,
      trintaeseis: false,
      trintaeoito: false,
      quarenta: false,
      quarentaedois: false,
      quarentaequatro: false,
      quarentaeseis: false,
      itensChecked: {},
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

    this.props.onSelectSize(itensChecked);
    this.props.onSelect();
  }
  render () {
    return (
      <div className="sizefilter"> 
        <h4 className="sizefilter__titulo">tamanhos</h4>
          <div className="sizefilter__box">
            <label htmlFor="pequeno" className={"sizefilter__input " + (this.state.pequeno ? "sizefilter__input--selected" : "")}>
              <input type="checkbox" name="pequeno" id="pequeno" onChange={this.isChecked}/> 
              P
            </label>
            <label htmlFor="medio" className={"sizefilter__input " + (this.state.medio ? "sizefilter__input--selected" : "")}>
              <input type="checkbox" name="medio" id="medio" onChange={this.isChecked}/> 
              M
            </label>
            <label htmlFor="grande" className={"sizefilter__input " + (this.state.grande ? "sizefilter__input--selected" : "")}>
              <input type="checkbox" name="grande" id="grande" onChange={this.isChecked}/> 
              G
            </label>
            <label htmlFor="extragrande" className={"sizefilter__input " + (this.state.extragrande ? "sizefilter__input--selected" : "")}>
              <input type="checkbox" name="extragrande" id="extragrande" onChange={this.isChecked}/> 
              GG
            </label>
            <label htmlFor="unico" className={"sizefilter__input " + (this.state.unico ? "sizefilter__input--selected" : "")}>
              <input type="checkbox" name="unico" id="unico" onChange={this.isChecked}/> 
              U
            </label>
            <label htmlFor="trintaeseis" className={"sizefilter__input " + (this.state.trintaeseis ? "sizefilter__input--selected" : "")}>
              <input type="checkbox" name="trintaeseis" id="trintaeseis" onChange={this.isChecked}/> 
              36
            </label>
            <label htmlFor="trintaeoito" className={"sizefilter__input " + (this.state.trintaeoito ? "sizefilter__input--selected" : "")}>
              <input type="checkbox" name="trintaeoito" id="trintaeoito" onChange={this.isChecked}/> 
              38
            </label>
            <label htmlFor="quarenta" className={"sizefilter__input " + (this.state.quarenta ? "sizefilter__input--selected" : "")}>
              <input type="checkbox" name="quarenta" id="quarenta" onChange={this.isChecked}/> 
              40
            </label>
            <label htmlFor="quarentaedois" className={"sizefilter__input " + (this.state.quarentaedois ? "sizefilter__input--selected" : "")}>
              <input type="checkbox" name="quarentaedois" id="quarentaedois" onChange={this.isChecked}/> 
              42
            </label>
            <label htmlFor="quarentaequatro" className={"sizefilter__input " + (this.state.quarentaequatro ? "sizefilter__input--selected" : "")}>
              <input type="checkbox" name="quarentaequatro" id="quarentaequatro" onChange={this.isChecked}/> 
              44
            </label>
            <label htmlFor="quarentaeseis" className={"sizefilter__input " + (this.state.quarentaeseis ? "sizefilter__input--selected" : "")}>
              <input type="checkbox" name="quarentaeseis" id="quarentaeseis" onChange={this.isChecked}/> 
              46
            </label>
          </div>
      </div>
    );
  }
}

export default SizeFilter