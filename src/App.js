import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExamplePDFDoc from './documents/ExamplePDFDoc';
import ExampleDoc from './documents/ExampleDoc';

class App extends Component {
  constructor(props) {
    super(props);
    this.exportToType = this.exportToType.bind();
    this.exportToPDF = this.exportToPDF.bind();
  }

  exportToType(type) {
    const doc = ExampleDoc.create({
      names: ['John', 'Jill'],
      ages: [24, 25],
      fileType: type,
    });

    doc.download();
  }

  exportToPDF() {
    const doc = ExamplePDFDoc.create({
      name: 'sample.pdf',
      names: ['John', 'Jill'],
      ages: [24, 25],
    });

    doc.open();
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
        <button onClick={() => this.exportToPDF()}>Download PDF</button>
      </div>
    );
  }
}

export default App;
