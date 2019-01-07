import PropTypes from 'prop-types';
import { DocFlux, Component } from '@harvest-profit/doc-flux';
/** @jsx DocFlux.createElement */

// This simply shows that you can pass the raw JSON for pdfmake
export default class Test extends Component {
  static propTypes = {
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
    ages: PropTypes.arrayOf(PropTypes.number).isRequired,
  }

  renderTableRows() {
    return this.props.names.map((name, idx) => (
      <tr>
        <td>{name}</td>
        <td>cool</td>
        <td>{this.props.ages[idx]}</td>
      </tr>
    ));
  }

  render() {
    return (
      <raw
        data={{
          header: 'test content',
          stack: [
            {
              text: 'page 1',
              pageBreak: 'after',
            },
            {
              text: 'page 2',
              pageBreak: 'after',
            },
          ],
        }}
      />
    );
  }
}
