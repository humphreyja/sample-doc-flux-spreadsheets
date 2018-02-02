import PropTypes from 'prop-types';
import SampleTable from './components/SampleTable';
import SpreadSheetDocument from './SpreadSheetDocument';


export default class ExampleDoc extends SpreadSheetDocument {
  static propTypes = {
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
    ages: PropTypes.arrayOf(PropTypes.number).isRequired,
    fileType: PropTypes.oneOf(['csv', 'xlsx', 'xml']),
  }

  static defaultProps = {
    fileType: 'csv',
  }

  static documentSettings(props) {
    return {
      name: 'People',
      type: props.fileType,
    };
  }

  static component = SampleTable;
}
