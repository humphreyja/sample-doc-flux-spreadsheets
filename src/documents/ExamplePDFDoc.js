import PropTypes from 'prop-types';
import { Document as PDFDocument } from '@harvest-profit/doc-flux-pdfs';
// import Comp from './components/Test';
import Comp from './components/PDFHeadings';
// import Comp from './components/SampleTable';


export default class ExampleDoc extends PDFDocument {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  static styleSheet() {
    return {
      year: {
        color: 'blue',
      },
      numberCol: {
        alignment: 'right',
      },
    };
  }

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
