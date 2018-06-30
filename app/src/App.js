import React, { Component } from 'react';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group'
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
      limit: 9
    }
  }
  componentDidMount() {
    this.loadContent();
    this.loadMore();
  }

  loadContent = () => {
    Apis.listProducts(this.state.limit).then(
      response => {
        this.setState({
          dados: response.data,
        });
      }
    );
  }

  loadMore = () =>{
    this.setState({ limit: this.state.limit + 3 });
    this.loadContent();
  }

  render() {
    return (
      <div className="app">
        <header className="container">
          <Header/>
        </header>
        <hr className="separador"/>
        <section className="container sub-header">
          <SubHeader/>
        </section>
        <main className="container main">
          <aside className="aside">
            <ColorFilter/>
            <SizeFilter/>
            <PriceFilter/>
          </aside>
          <section className="vitrine">
              <CSSTransitionGroup 
              transitionName="example"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              className="vitrine__group">
              {this.state.dados.map((produto, index) => {
                return <VitrineItem key={index} Id={produto.id} Nome={produto.nome} Imagem={produto.imagem} Preco={produto.preco} Desconto={produto.valorDesconto} />
              })}
              <button className="button__more" onClick={this.loadMore}>Carregar Mais</button>
              </CSSTransitionGroup>
       
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
