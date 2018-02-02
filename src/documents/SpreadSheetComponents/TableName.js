import PropTypes from 'prop-types';
import { DOMComponent } from '@harvest-profit/doc-flux';

/**
 * Renders a table name
 */
export default class TableName extends DOMComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  static defaultProps = {
    children: '',
  }

  render() {
    return this.props.children.join('');
  }

  static transform(DOM) {
    return DOM;
  }
}
