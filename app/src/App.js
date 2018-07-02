import React, { Component } from 'react';
import './App.css';
// import { CSSTransitionGroup } from 'react-transition-group';
import Header from './components/Header/Header'
import SubHeader from './components/SubHeader/SubHeader';
import ColorFilter from './components/ColorFilter/ColorFilter';
import SizeFilter from './components/SizeFilter/SizeFilter';
import PriceFilter from './components/PriceFilter/PriceFilter';
import VitrineItem from './components/VitrineItem/VitrineItem';

import Apis from './api/Api'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [],
      limit: 6,
      filterConsultColor: "",
      filterConsultSize: "",
      filterConsultPrice: "",
      cart: 0
    }
    
  }
  componentDidMount() {
    this.loadContent();

  }

  loadContent = () => {
    Apis.listData().then(
      response => {
        this.setState({
          dados: response.data,
        });
      }
    );
  }

  loadByFilters = () => {
    let consult = this.state.filterConsultColor;
    consult += this.state.filterConsultSize;
    consult += this.state.filterConsultPrice;
    Apis.filterData(consult).then(
      response => {
        this.setState({
          dados: response.data,
        });
        // console.log(response.data);
      }
    );
  }

  loadByColor = (argColor) => {
    // console.log(argColor);
    let resultColor = "";
    for (let prop in argColor) {
      resultColor += "cor=" + prop + "&";
    }
    this.state.filterConsultColor = resultColor;
    console.log(this.state.filterConsultColor);
    // Apis.filterByColor(resultColor).then(
    //   response => {
    //     this.setState({
    //       dados: response.data,
    //       limit: 6
    //     });
    //   }
    // );
  }

  loadBySize = (argSize) => {
    let resultSize = "";
    for (let prop in argSize) {
      resultSize += "tamanhos_like=" + prop + "&";
    }
    this.state.filterConsultSize = resultSize;
    console.log(this.state.filterConsultSize);

    // Apis.filterBySize(resultSize).then(
    //   response => {
    //     this.setState({
    //       dados: response.data,
    //       limit: 6
    //     });
    //   }
    // );
  }

  loadByPrice = (argPriceMin, argPriceMax) => {
    let resultPrice = "";
    for (let prop in argPriceMin) {
      resultPrice += "preco_gte=" + argPriceMin[prop] + "&";
    }
    for (let prop in argPriceMax) {
      if (parseInt(argPriceMax[prop], 10) !== 0) {
        resultPrice += "preco_lte=" + argPriceMax[prop] + "&";
      }
    }
    this.state.filterConsultPrice = resultPrice;
    console.log(this.state.filterConsultPrice);
    
    // Apis.filterByPrice(resultPrice).then(
    //   response => {
    //     this.setState({
    //       dados: response.data,
    //       limit: 6
    //     });
    //   }
    // );
  }

  addCart = () => {
    this.setState({
      cart: this.state.cart + 1
    });
  }

  loadMore = () => {
    this.setState({
      limit: this.state.limit + 3
    });
    if (this.state.dados.length <= this.state.limit) {
      alert('Sem produtos para carregar');
    }
  }

  render() {
    return (
      <div className="app">
        <header className="container">
          <Header Cart={this.state.cart}/>
        </header>
        <hr className="separador" />
        <section className="container sub-header">
          <SubHeader />
        </section>
        <main className="container main">
          <aside className="aside">
            <ColorFilter onSelectColor={this.loadByColor} onSelect={this.loadByFilters} />
            <SizeFilter onSelectSize={this.loadBySize} onSelect={this.loadByFilters} />
            <PriceFilter onSelectPrice={this.loadByPrice} onSelect={this.loadByFilters} />
          </aside>
          <section className="vitrine">
            {this.state.dados.slice(0, this.state.limit).map((produto, index) => {
              return <VitrineItem key={index} Id={produto.id} Nome={produto.nome} Imagem={produto.imagem} Preco={produto.preco} Desconto={produto.valorDesconto} AddCart={this.addCart}/>
            })}
            <button className="button__more" onClick={this.loadMore}>Carregar Mais</button>

          </section>
        </main>
        <footer className="footer">
          <div className="container">Profite - CNPJ 05.559.134/0001-60 End: Voluntários da Pátria, 301/702 Botafogo - RJ - 22270-000</div>
        </footer>
      </div>
    );
  }
}

export default App;
