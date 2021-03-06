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
      <tr height={100}>
        <td>{name}</td>
        <td>cool</td>
        <td>{this.props.ages[idx]}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <h1>cool</h1>
        <table>
          <tname>People</tname>
          <thead height={100}>
            <th colSpan={2}>Name</th>
            <th>Age</th>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
        <h1>cool 2</h1>
      </div>
    );
  }
}
