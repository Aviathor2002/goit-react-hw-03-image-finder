import { React, Component } from 'react';
import { ButtonStyle } from './Button.style';
import PropTypes from 'prop-types';

export default class Button extends Component {
  onButtonClick = () => {
    this.props.loadMore();
  };
  render() {
    return (
      <ButtonStyle disabled={this.props.isLoading} onClick={this.onButtonClick}>
        {this.props.isLoading ? 'Loading...' : 'Load more'}
      </ButtonStyle>
    );
  }
}

Button.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
};
