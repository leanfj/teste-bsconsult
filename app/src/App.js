import React, { Component } from 'react';
import logo from './images/logo-profite.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="sub-header">
          <div>Sub header</div>
        </section>
        <main className="main">
          <aside className="aside">
            <div>Aside filtres</div>
          </aside>
          <section className="vitrine">
            <div>Vitrine</div>
          </section>
        </main>
        <footer className="footer">
          <div>Footer content</div>
        </footer>
      </div>
    );
  }
}

export default App;
