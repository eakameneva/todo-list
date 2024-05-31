import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from './NewTaskForm';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdded={this.props.onItemAdded} />
      </header>
    );
  }
}
AppHeader.propTypes = {
  onItemAdded: PropTypes.func,
};

export default AppHeader;
