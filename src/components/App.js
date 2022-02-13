import React from "react";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import CardDetail from "./CardDetail";
import ygoprodeck from "../api/ygoprodeck";

class App extends React.Component {
  state = { cards: [], selectedCard: null };

  onSearchSubmit = async (term) => {
    const response = await ygoprodeck.get("/api/v7/cardinfo.php", {
      params: { fname: term },
    });
    this.setState({ cards: response.data.data });
  };

  onCardSelect = (card) => {
    this.setState({ selectedCard: card });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui eleven wide column grid">
            <CardList
              onCardSelect={this.onCardSelect}
              cards={this.state.cards}
            />
          </div>
          <div className="ui segment five wide column">
            <CardDetail card={this.state.selectedCard} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
