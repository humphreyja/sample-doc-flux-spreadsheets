import PropTypes from 'prop-types';
import { DocFlux, Component } from '@harvest-profit/doc-flux';
/** @jsx DocFlux.createElement */

export default class SampleTable extends Component {
  static propTypes = {
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
    ages: PropTypes.arrayOf(PropTypes.number).isRequired,
  }

  renderTableRows() {
    return this.props.names.map((name, idx) => (
      <tr>
        <td>{name}</td>
        <td>{this.props.ages[idx]}</td>
      </tr>
    ));
  }

  render() {
    return (
      <table>
        <tname>People</tname>
        <thead>
          <th>Name</th>
          <th>Age</th>
        </thead>
        <tbody>
          {this.renderTableRows()}
        </tbody>
      </table>
    );
  }
}
