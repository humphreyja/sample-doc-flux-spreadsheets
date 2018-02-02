import saveAs from 'save-as';
import XLSX from 'xlsx';
import { Document } from '@harvest-profit/doc-flux';
import Parser from './SpreadSheetComponents/Parser';

class GeneratedDocument {
  constructor(doc, settings) {
    const bookType = settings.type || 'csv';
    const filename = settings.name || 'Untitled';
    const wopts = { bookType, type: 'array' };
    this.filename = filename;
    this.extension = bookType;
    this.doc = XLSX.write(doc, wopts);
  }

  download() {
    /* the saveAs call downloads a file on the local machine */
    saveAs(new Blob([this.doc], { type: 'application/octet-stream' }), `${this.filename}.${this.extension}`);
  }
}

/**
 * This is used to create the initial PDF document.  It adds a `documentSettings` method that
 * that can be overridden to return a different PDFBuilder config.  It also provides a `download`
 * function that renders the PDF components and downloads the document.
 */
export default class SpreadSheetDocument extends Document {
  static documentSettings() {
    return {};
  }

  static createDocument(doc, props) {
    return new GeneratedDocument(doc, this.documentSettings(props));
  }
  static createBuilder() {
    return XLSX.utils.book_new();
  }

  static parser = Parser;
}
