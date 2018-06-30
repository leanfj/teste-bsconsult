import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SubHeader from './components/SubHeader/SubHeader';
import ColorFilter from './components/ColorFilter/ColorFilter';
import SizeFilter from './components/SizeFilter/SizeFilter';
import PriceFilter from './components/PriceFilter/PriceFilter';
import VitrineItem from './components/VitrineItem/VitrineItem';

class App extends Component {
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
            <VitrineItem/>
            <VitrineItem/>
            <VitrineItem/>
            <VitrineItem/>
            <VitrineItem/>
            <VitrineItem/>
            <VitrineItem/>
            <VitrineItem/>
            <VitrineItem/>
            <VitrineItem/>
            <VitrineItem/>
            <VitrineItem/>
            <a href="#" className="button__more">Carregar Mais</a>
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
