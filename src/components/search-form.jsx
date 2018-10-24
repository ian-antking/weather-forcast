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

  render() {
    return (
      <div className="search-form">
        <span>
          <button
            onClick={
              () => this.props.onSearch()
          }
          >
            Search
          </button>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.searchText}
          />
        </span>
      </div>
    );
  }
}

export default SearchForm;
