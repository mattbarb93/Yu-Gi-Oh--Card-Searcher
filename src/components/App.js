import React from "react";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import ygoprodeck from "../api/ygoprodeck";

class App extends React.Component {
  state = { cards: [] };

  onSearchSubmit = async (term) => {
    const response = await ygoprodeck.get("/api/v7/cardinfo.php", {
      params: { fname: term },
    });
    this.setState({ cards: response.data.data });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
export default App;
