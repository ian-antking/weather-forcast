import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  _handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.onSearch(this.state.searchText);
    }
  };

  render() {
    return (
      <div className="search-form">
        <span>
          <button
            onClick={
              () => this.props.onSearch(this.state.searchText)
          }
          >
            Search
          </button>
          <input
            type="text"
            onChange={this.handleInputChange}
            onKeyPress={this._handleKeyPress}
          />
        </span>
      </div>
    );
  }
}

export default SearchForm;
