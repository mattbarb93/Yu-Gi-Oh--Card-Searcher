import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault(); // 2)

    //This allows invoking callbacks from child. To get access to the callback, refer it as this.props, instead of just props.
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
