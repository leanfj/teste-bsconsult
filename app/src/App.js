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
      filterOrder: "",
      cart: 0,
      isMobileCloseClicked: false,
      isMobileOpenClicked: false
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
    consult += this.state.filterOrder;
    Apis.filterData(consult).then(
      response => {
        this.setState({
          dados: response.data,
        });
      }
    );
  }

  loadByOrder = (argOrder) => {
    let resultOrder = ""
    if (argOrder){
      resultOrder = `_sort=preco&_order=${argOrder}`;
    } else {
      resultOrder = `_sort=id&_order=asc`
    }

    // console.log(resultOrder);
    // eslint-disable-next-line
    this.state.filterOrder = resultOrder;
    
  }

  loadByColor = (argColor) => {
    let resultColor = "";
    for (let prop in argColor) {
      resultColor += "cor=" + prop + "&";
    }
    // eslint-disable-next-line
    this.state.filterConsultColor = resultColor;
    
    
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
    // eslint-disable-next-line
    this.state.filterConsultSize = resultSize;
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
    // eslint-disable-next-line
    this.state.filterConsultPrice = resultPrice;
    
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
  mobileClose = () => {
    this.setState({isMobileOpenClicked: false});
  }
  mobileOpen = () => {
    this.setState({isMobileOpenClicked: true});
  }

  render() {
    return (
      <div className="app">
        <header className="container">
          <Header Cart={this.state.cart}/>
        </header>
        <hr className="separador" />
        <section className="container sub-header">
          <SubHeader onSelecOrder={this.loadByOrder} onSelect={this.loadByFilters} onFilterClick={this.mobileOpen}/>
        </section>
        <main className="container main">
          <aside className={"aside " + (this.state.isMobileOpenClicked ? "mobileaside__open showMenu" : "mobileaseide__close hideMenu")}>
            <span className="mobile__close" onClick={this.mobileClose}><i className="fas fa-window-close"></i></span>
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
