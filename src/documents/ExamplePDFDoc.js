import PropTypes from 'prop-types';
import { Document as PDFDocument } from '@harvest-profit/doc-flux-pdfs';
// import Comp from './components/Test';
import Comp from './components/PDFHeadings';
// import Comp from './components/SampleTable';

const publicURL = `${window.location.protocol}//${window.location.host}`;

const style = {
  fonts: {
    OpenSans: {
      normal: `${publicURL}/Open_Sans/OpenSans-Regular.ttf`,
      bold: `${publicURL}/Open_Sans/OpenSans-Bold.ttf`,
      italics: `${publicURL}/Open_Sans/OpenSans-Italic.ttf`,
      bolditalics: `${publicURL}/Open_Sans/OpenSans-BoldItalic.ttf`,
    },
    Lobster: {
      normal: `${publicURL}/Lobster/Lobster-Regular.ttf`,
    },
  },
  css: {
    year: {
      color: 'blue',
      font: 'Lobster',
      bold: false,
    },
    numberCol: {
      alignment: 'right',
    },
  },
  default: {
    font: 'OpenSans',
    fontSize: 10,
    color: '#333333',
  },
};

export default class ExampleDoc extends PDFDocument {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  static documentStyling = style;

  static documentSettings(props) {
    return {
      name: props.name,
      pageMargins: [30, 55, 30, 40],
      info: {
        title: 'Sample Document',
        author: 'john doe',
        subject: 'Sampling Document Building',
        keywords: 'sample',
        creator: 'Harvest Profit',
        producer: 'Harvest Profit',
      },
    };
  }

  // static createDocument(docDefinition) {
  //   console.log(docDefinition);
  // }

  static component = Comp;
}
