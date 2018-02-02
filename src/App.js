import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleDoc from './documents/ExampleDoc';

class App extends Component {
  constructor(props) {
    super(props);
    this.exportToType = this.exportToType.bind();
  }

  exportToType(type) {
    const doc = ExampleDoc.create({
      names: ['John', 'Jill'],
      ages: [24, 25],
      fileType: type,
    });

    doc.download();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sample Document Download</h1>
        </header>
        <button onClick={() => this.exportToType('csv')}>Download CSV</button>
        <button onClick={() => this.exportToType('xlsx')}>Download Excel</button>
      </div>
    );
  }
}

export default App;
