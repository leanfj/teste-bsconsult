import React, { Component } from 'react';
import './App.css';

//Components
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="container">
          <Header/>
        </header>
        <hr className="separador"/>
        <section className="container sub-header">
          <div>Sub header</div>
        </section>
        <main className="container main">
          <aside className="aside">
            <div>Aside filtres</div>
          </aside>
          <section className="vitrine">
            <div>Vitrine</div>
          </section>
        </main>
        <footer className="footer">
          <div className="container">Footer content</div>
        </footer>
      </div>
    );
  }
}

export default App;
